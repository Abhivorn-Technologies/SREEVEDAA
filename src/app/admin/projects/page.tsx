"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  marqueeImages: string[];
  videos: string[];
  order: number;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<Project>>({});
  
  // Track deleted items so user can "restore" them before saving
  const [deletedMarqueeIndices, setDeletedMarqueeIndices] = useState<number[]>([]);
  const [deletedVideoIndices, setDeletedVideoIndices] = useState<number[]>([]);

  // Delete modal state for projects
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Delete modal state for media items
  const [itemToDelete, setItemToDelete] = useState<{type: 'marquee'|'video', index: number} | null>(null);

  // Validation & Error state
  const [imageError, setImageError] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setDeletedMarqueeIndices([]);
    setDeletedVideoIndices([]);
    setIsCreating(false);
    setImageError(false);
    setSaveError(null);
  };

  const handleCreateNew = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      location: "",
      category: "",
      description: "",
      image: "",
      marqueeImages: [],
      videos: [],
      order: projects.length + 1,
    });
    setDeletedMarqueeIndices([]);
    setDeletedVideoIndices([]);
    setIsCreating(true);
    setImageError(false);
    setSaveError(null);
  };

  const handleCancel = () => {
    setEditingProject(null);
    setIsCreating(false);
    setFormData({});
    setDeletedMarqueeIndices([]);
    setDeletedVideoIndices([]);
    setImageError(false);
    setSaveError(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError(null);
    
    if (!formData.image) {
      setImageError(true);
      return;
    }

    setSaving(true);
    try {
      // Filter out deleted items before saving
      const finalData = { ...formData };
      if (finalData.marqueeImages) {
        finalData.marqueeImages = finalData.marqueeImages.filter((_, i) => !deletedMarqueeIndices.includes(i));
      }
      if (finalData.videos) {
        finalData.videos = finalData.videos.filter((_, i) => !deletedVideoIndices.includes(i));
      }

      const url = isCreating ? "/api/admin/projects" : `/api/admin/projects/${editingProject?._id}`;
      const method = isCreating ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (res.ok) {
        await fetchProjects();
        handleCancel();
      } else {
        setSaveError("Failed to save project. File size might be too large.");
      }
    } catch (error) {
      console.error("Error saving project", error);
      setSaveError("Error saving project. Ensure file sizes are not too large.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (id: string) => {
    setProjectToDelete(id);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/projects/${projectToDelete}`, { method: "DELETE" });
      if (res.ok) {
        await fetchProjects();
        setProjectToDelete(null);
      } else {
        setSaveError("Failed to delete project.");
        setProjectToDelete(null);
      }
    } catch (error) {
      console.error("Error deleting project", error);
      setSaveError("Error deleting project.");
      setProjectToDelete(null);
    } finally {
      setIsDeleting(false);
    }
  };

  // --- FILE UPLOAD HELPERS ---

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1080;
          if (width > height) {
            if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
          } else {
            if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.8));
        };
      };
    });
  };

  const encodeVideo = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      // 10MB soft limit warning
      if (file.size > 10 * 1024 * 1024) {
        // We'll just rely on the save API failing with a clear size error message
        // instead of blocking with a native browser confirm().
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // --- HANDLERS ---
  const handleMainImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await compressImage(file);
      setFormData({ ...formData, image: base64 });
      setImageError(false);
    }
  };

  const handleAddMarqueeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await compressImage(file);
      setFormData({ ...formData, marqueeImages: [...(formData.marqueeImages || []), base64] });
    }
    e.target.value = '';
  };

  const handleUpdateMarqueeImage = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await compressImage(file);
      const newArray = [...(formData.marqueeImages || [])];
      newArray[index] = base64;
      setFormData({ ...formData, marqueeImages: newArray });
    }
  };

  const handleAddVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await encodeVideo(file);
        setFormData({ ...formData, videos: [...(formData.videos || []), base64] });
      } catch (err) {
        // User cancelled or error
      }
    }
    e.target.value = '';
  };

  const handleUpdateVideo = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await encodeVideo(file);
        const newArray = [...(formData.videos || [])];
        newArray[index] = base64;
        setFormData({ ...formData, videos: newArray });
      } catch (err) {}
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading projects...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-serif">Projects Database</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your full portfolio with visual media uploading.
          </p>
        </div>
        {!editingProject && !isCreating && (
          <button
            onClick={handleCreateNew}
            className="bg-[#8C1F1F] hover:bg-[#6b1616] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors"
          >
            + Add New Project
          </button>
        )}
      </div>

      {saveError && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between shadow-sm">
          {saveError}
          <button onClick={() => setSaveError(null)} className="text-red-400 hover:text-red-600 text-lg">
            &times;
          </button>
        </div>
      )}

      {(editingProject || isCreating) ? (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-xl font-bold text-slate-900 font-serif">
              {isCreating ? "Create New Project" : `Editing: ${editingProject?.title}`}
            </h2>
            <button onClick={handleCancel} className="text-sm font-bold text-slate-500 hover:text-slate-800">
              Cancel
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-8 max-w-5xl mx-auto">
            
            {/* TEXT FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-4">Project Details</h3>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Title <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#8C1F1F] focus:border-[#8C1F1F]"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Category <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.category || ""}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#8C1F1F] focus:border-[#8C1F1F]"
                  placeholder="e.g. Residential, Commercial"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#8C1F1F] focus:border-[#8C1F1F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Display Order <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  required
                  value={formData.order || 0}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#8C1F1F] focus:border-[#8C1F1F]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Description <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows={3}
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#8C1F1F] focus:border-[#8C1F1F]"
                />
              </div>
            </div>

            {/* MEDIA FIELDS */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-900 font-serif border-b pb-2">Media Assets</h3>
              
              {/* MAIN COVER IMAGE */}
              <div className={`bg-white p-6 rounded-xl border shadow-sm transition-colors ${imageError ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}>
                <label className="block text-sm font-bold text-slate-700 mb-4">
                  1. Main Cover Image <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className={`relative w-full sm:w-64 aspect-[4/3] rounded-xl overflow-hidden border shrink-0 ${imageError ? 'border-red-300 bg-red-100/50' : 'border-slate-200 bg-slate-100'}`}>
                    {formData.image ? (
                      <Image src={formData.image} alt="Cover Preview" fill className="object-cover" />
                    ) : (
                      <div className={`absolute inset-0 flex items-center justify-center text-sm ${imageError ? 'text-red-400 font-bold' : 'text-slate-400'}`}>
                        {imageError ? "Image Required" : "No Image Selected"}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-slate-500 mb-2">This is the main thumbnail shown on the Projects list page.</p>
                    {imageError && (
                      <p className="text-red-500 text-xs font-bold mb-1">Please select a Main Cover Image before saving.</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 border border-slate-300 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 transition-colors inline-block text-center w-fit">
                        Choose File...
                        <input type="file" accept="image/*" className="hidden" onChange={handleMainImageChange} />
                      </label>
                      {editingProject && editingProject.image !== formData.image && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: editingProject.image })}
                          className="px-4 py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-sm font-semibold transition-colors"
                        >
                          Restore Original
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* MARQUEE IMAGES */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                  <label className="block text-sm font-bold text-slate-700">2. Scrolling Marquee Images</label>
                  <label className="cursor-pointer text-xs font-bold text-[#8C1F1F] hover:underline flex items-center gap-1">
                    + Add New Image
                    <input type="file" accept="image/*" className="hidden" onChange={handleAddMarqueeImage} />
                  </label>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {(formData.marqueeImages || []).map((img, idx) => {
                    const isDeleted = deletedMarqueeIndices.includes(idx);
                    return (
                      <div key={idx} className={`relative rounded-xl overflow-hidden border transition-all ${isDeleted ? 'opacity-40 border-red-200' : 'border-slate-200'}`}>
                        <div className="relative aspect-[3/4] bg-slate-100">
                          <Image src={img} alt={`Marquee ${idx+1}`} fill className="object-cover" />
                          {isDeleted && <div className="absolute inset-0 bg-red-900/10 backdrop-blur-[1px]" />}
                        </div>
                        <div className="p-2 flex flex-col gap-1.5 bg-slate-50 border-t border-slate-200">
                          {isDeleted ? (
                            <button 
                              type="button" 
                              onClick={() => setDeletedMarqueeIndices(prev => prev.filter(i => i !== idx))}
                              className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 py-1.5 rounded"
                            >
                              Restore Deleted Image
                            </button>
                          ) : (
                            <>
                              <label className="cursor-pointer text-[10px] font-bold uppercase text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 py-1.5 rounded text-center transition-colors">
                                Replace Image
                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpdateMarqueeImage(idx, e)} />
                              </label>
                              {editingProject && idx < (editingProject.marqueeImages?.length || 0) && editingProject.marqueeImages[idx] !== img && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const newArray = [...(formData.marqueeImages || [])];
                                    newArray[idx] = editingProject.marqueeImages[idx];
                                    setFormData({ ...formData, marqueeImages: newArray });
                                  }}
                                  className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 hover:bg-emerald-100 py-1.5 rounded transition-colors"
                                >
                                  Restore Original
                                </button>
                              )}
                              <button 
                                type="button" 
                                onClick={() => setItemToDelete({type: 'marquee', index: idx})}
                                className="text-[10px] font-bold uppercase text-red-600 hover:bg-red-50 py-1.5 rounded transition-colors"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {(!formData.marqueeImages || formData.marqueeImages.length === 0) && (
                    <div className="col-span-full py-8 text-center text-slate-400 text-sm italic">
                      No marquee images added yet.
                    </div>
                  )}
                </div>
              </div>

              {/* VIDEOS */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                  <label className="block text-sm font-bold text-slate-700">3. Project Videos</label>
                  <label className="cursor-pointer text-xs font-bold text-[#8C1F1F] hover:underline flex items-center gap-1">
                    + Add New Video
                    <input type="file" accept="video/mp4,video/webm" className="hidden" onChange={handleAddVideo} />
                  </label>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {(formData.videos || []).map((vid, idx) => {
                    const isDeleted = deletedVideoIndices.includes(idx);
                    // Check if URL is base64 or path
                    const isUrl = vid.startsWith('http') || vid.startsWith('/');
                    return (
                      <div key={idx} className={`relative rounded-xl overflow-hidden border transition-all ${isDeleted ? 'opacity-40 border-red-200' : 'border-slate-200 bg-slate-50'}`}>
                        <div className="relative aspect-video bg-black flex items-center justify-center">
                          <video src={vid} controls className="w-full h-full object-cover" />
                          {isDeleted && <div className="absolute inset-0 bg-red-900/30 backdrop-blur-sm" />}
                        </div>
                        <div className="p-3 flex items-center justify-between">
                          {isDeleted ? (
                            <button 
                              type="button" 
                              onClick={() => setDeletedVideoIndices(prev => prev.filter(i => i !== idx))}
                              className="w-full text-xs font-bold uppercase text-emerald-600 bg-emerald-50 py-2 rounded"
                            >
                              Restore Video
                            </button>
                          ) : (
                            <>
                              <label className="cursor-pointer text-xs font-bold uppercase text-slate-700 hover:text-[#8C1F1F]">
                                Replace
                                <input type="file" accept="video/mp4,video/webm" className="hidden" onChange={(e) => handleUpdateVideo(idx, e)} />
                              </label>
                              {editingProject && idx < (editingProject.videos?.length || 0) && editingProject.videos[idx] !== vid && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const newArray = [...(formData.videos || [])];
                                    newArray[idx] = editingProject.videos[idx];
                                    setFormData({ ...formData, videos: newArray });
                                  }}
                                  className="text-xs font-bold uppercase text-emerald-600 hover:text-emerald-800"
                                >
                                  Restore
                                </button>
                              )}
                              <button 
                                type="button" 
                                onClick={() => setItemToDelete({type: 'video', index: idx})}
                                className="text-xs font-bold uppercase text-red-600 hover:text-red-800"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                        {isUrl && !isDeleted && (
                          <div className="px-3 pb-3 truncate text-[10px] text-slate-400" title={vid}>
                            {vid}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {(!formData.videos || formData.videos.length === 0) && (
                    <div className="col-span-full py-8 text-center text-slate-400 text-sm italic">
                      No videos uploaded yet.
                    </div>
                  )}
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-sm font-bold text-slate-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-8 py-2.5 rounded-lg bg-[#8C1F1F] hover:bg-[#6b1616] text-white text-sm font-bold shadow-md disabled:opacity-50 flex items-center gap-2"
              >
                {saving && (
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                )}
                {saving ? "Saving Data..." : "Save Project"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1 truncate">{project.title}</h3>
                <p className="text-xs text-slate-500 mb-4 truncate flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.location}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button onClick={() => handleEdit(project)} className="text-sm font-bold text-[#8C1F1F] hover:underline flex items-center gap-1">
                    Edit Project
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete Project">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-slate-500 mb-4">No projects found in the database.</p>
              <button onClick={handleCreateNew} className="text-[#8C1F1F] font-bold hover:underline">Create your first project</button>
            </div>
          )}
        </div>
      )}

      {/* Delete Project Modal */}
      {projectToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center border border-slate-200">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Project</h3>
              <p className="text-slate-500 text-sm mb-1">Are you sure you want to permanently delete this project?</p>
              <p className="text-slate-400 text-xs">This action cannot be undone.</p>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-3">
              <button 
                onClick={() => setProjectToDelete(null)}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                disabled={isDeleting}
                className="px-6 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                {isDeleting ? "Deleting..." : "Delete Project"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Media Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center border border-slate-200">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Media</h3>
              <p className="text-slate-500 text-sm mb-1">Are you sure you want to remove this item?</p>
              <p className="text-slate-400 text-xs">You can restore it before saving.</p>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-3">
              <button 
                onClick={() => setItemToDelete(null)}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  if (itemToDelete.type === 'marquee') {
                    setDeletedMarqueeIndices(prev => [...prev, itemToDelete.index]);
                  } else {
                    setDeletedVideoIndices(prev => [...prev, itemToDelete.index]);
                  }
                  setItemToDelete(null);
                }}
                className="px-6 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors"
              >
                Delete Asset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
