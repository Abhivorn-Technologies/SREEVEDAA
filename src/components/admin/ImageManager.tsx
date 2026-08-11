"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type SiteImage = {
  _id: string;
  page: string;
  section: string;
  imageUrl: string;
  defaultImageUrl?: string;
  title: string;
  order: number;
  isDefault?: boolean;
};

type DefaultImageProp = {
  title: string;
  imageUrl: string;
  order?: number;
};

export function ImageManager({ 
  page, 
  section, 
  title, 
  defaultImages = [],
  hideAddButton = false
}: { 
  page: string; 
  section: string; 
  title?: string;
  defaultImages?: DefaultImageProp[];
  hideAddButton?: boolean;
}) {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  // Modals state
  const [editingImage, setEditingImage] = useState<SiteImage | null>(null);
  const [deletingImage, setDeletingImage] = useState<SiteImage | null>(null);
  const [restoringImage, setRestoringImage] = useState<SiteImage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Edit form state
  const [editTitle, setEditTitle] = useState("");
  const [editOrder, setEditOrder] = useState<number>(1);
  const [editBase64, setEditBase64] = useState<string | null>(null);
  const [editFileName, setEditFileName] = useState("No file chosen");

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/images?page=${page}&section=${section}`);
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } catch (error) {
      console.error("Failed to fetch images", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, section]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new window.Image();
      img.src = event.target?.result as string;
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        
        // Resize large images
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1080;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Compress to JPEG
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.85);

        try {
          const res = await fetch("/api/admin/images", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              page,
              section,
              imageUrl: compressedBase64,
              title: editingImage ? editTitle : file.name,
              order: editingImage ? editOrder : (displayImages.length + 1)
            }),
          });

          if (res.ok) {
            setEditingImage(null);
            fetchImages();
          } else {
            const errData = await res.json().catch(() => null);
            alert(`Upload failed: ${errData?.error || res.statusText}`);
          }
        } catch (error) {
          console.error("Upload error", error);
          alert("Network error occurred during upload.");
        } finally {
          setUploading(false);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }
      };
    };
  };

  const openEditModal = (image: SiteImage) => {
    setEditingImage(image);
    setEditTitle(image.title || "");
    setEditOrder(image.order || 1);
    setEditBase64(null);
    setEditFileName("No file chosen");
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setEditBase64(null);
      setEditFileName("No file chosen");
      return;
    }
    setEditFileName(file.name);
    
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
        
        setEditBase64(canvas.toDataURL("image/jpeg", 0.85));
      };
    };
  };

  const saveEdit = async () => {
    if (!editingImage) return;
    setIsSubmitting(true);
    try {
      // If editing a default image that isn't saved in DB yet
      if (editingImage.isDefault && editBase64) {
        const res = await fetch("/api/admin/images", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page,
            section,
            imageUrl: editBase64,
            title: editTitle || editingImage.title,
            order: editingImage.order
          }),
        });
        if (res.ok) {
          setEditingImage(null);
          fetchImages();
          return;
        }
      }

      const payload: any = {
        id: editingImage._id,
        title: editTitle,
        order: Number(editOrder)
      };
      if (editBase64) payload.imageUrl = editBase64;

      const res = await fetch("/api/admin/images", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setEditingImage(null);
        fetchImages();
      } else {
        alert("Failed to update image");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmDelete = async () => {
    if (!deletingImage) return;
    if (deletingImage.isDefault) {
      setDeletingImage(null);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/admin/images?id=${deletingImage._id}`, { method: "DELETE" });
      if (res.ok) {
        setImages(images.filter((img) => img._id !== deletingImage._id));
        setDeletingImage(null);
      } else {
        alert("Failed to delete image");
      }
    } catch (error) {
      console.error("Delete error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRestoreClick = (image: SiteImage) => {
    setRestoringImage(image);
  };

  const confirmRestore = async () => {
    if (!restoringImage || !restoringImage.defaultImageUrl) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/images", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: restoringImage._id,
          imageUrl: restoringImage.defaultImageUrl
        }),
      });

      if (res.ok) {
        setRestoringImage(null);
        fetchImages();
      } else {
        alert("Failed to restore image");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Construct display images: DB images OR fallback to defaultImages props
  const displayImages: SiteImage[] = images.length > 0 
    ? images 
    : defaultImages.map((def, idx) => ({
        _id: `def-${idx}`,
        page,
        section,
        imageUrl: def.imageUrl,
        defaultImageUrl: def.imageUrl,
        title: def.title,
        order: def.order || (idx + 1),
        isDefault: true
      }));

  return (
    <div className="mb-12 relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {title ? (
          <div>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 font-serif">{title}</h2>
          </div>
        ) : (
          <div className="hidden sm:block"></div>
        )}
        
        {!hideAddButton && (
          <div className={`w-full sm:w-auto mt-2 sm:mt-0 ${!title ? 'sm:ml-auto' : ''}`}>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all duration-300
                ${uploading
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#7a1515] to-[#d84315] hover:from-[#5a0f0f] hover:to-[#b83315] text-white hover:shadow-md'
                }`}
            >
              {uploading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Uploading...
                </span>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Add New Image
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-500 flex flex-col items-center justify-center gap-3">
          <svg className="w-6 h-6 animate-spin text-[#7a1515]" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <p className="text-sm font-medium">Loading assets...</p>
        </div>
      ) : displayImages.length === 0 ? (
        <div className="py-16 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <p className="text-sm font-medium text-slate-600">No images uploaded yet</p>
          <p className="text-xs text-slate-400 mt-1">Click "Add New Image" to get started.</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6">
          {displayImages.map((image) => (
            <div key={image._id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-sm flex flex-col bg-white border border-slate-200 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
              
              {/* Image Container (Flush Edges) */}
              <div className="aspect-[4/3] w-full relative bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {image.isDefault && (
                  <div className="absolute top-2 left-2 bg-[#8C1F1F]/90 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm">
                    Default System Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content & Actions */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                <div className="flex-1 text-center mb-4">
                  <h4 className="text-sm font-bold text-slate-900 font-serif leading-tight line-clamp-1">{image.title || "Untitled Image"}</h4>
                </div>
                
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-4">
                    <button 
                      onClick={() => openEditModal(image)}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-700 hover:text-[#7a1515] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      {image.isDefault ? "Change Image" : "Edit"}
                    </button>
                    {!image.isDefault && (
                      <>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <button
                          onClick={() => setDeletingImage(image)}
                          className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          Delete
                        </button>
                      </>
                    )}
                  </div>

                  {image.defaultImageUrl && image.imageUrl !== image.defaultImageUrl && !image.isDefault && (
                    <button
                      onClick={() => handleRestoreClick(image)}
                      className="flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-600 transition-colors group/restore mt-1"
                    >
                      <svg className="w-3 h-3 group-hover/restore:-rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                      Restore Original
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200">
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-lg font-bold text-slate-900">
                {editingImage.isDefault ? "Upload Replacement Image" : "Edit Asset Details"}
              </h3>
              <button onClick={() => setEditingImage(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">New Image File</label>
                <div className="flex border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                  <button 
                    type="button"
                    onClick={() => editFileInputRef.current?.click()}
                    className="bg-slate-50 px-4 py-2.5 border-r border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    Choose File
                  </button>
                  <div className="flex-1 px-4 py-2.5 text-sm text-slate-500 bg-white truncate flex items-center">
                    {editFileName}
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={editFileInputRef} 
                  onChange={handleEditFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <p className="text-xs text-slate-400 mt-1.5">Upload a new image file to replace the current default image.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alt Text / Title</label>
                <input 
                  type="text" 
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Display Order</label>
                <input 
                  type="number" 
                  value={editOrder}
                  onChange={(e) => setEditOrder(Number(e.target.value))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 shadow-sm"
                />
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setEditingImage(null)}
                className="px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                onClick={saveEdit}
                disabled={isSubmitting}
                className="px-5 py-2 text-sm font-semibold text-white bg-[#8C1F1F] hover:bg-[#7a1515] rounded-lg transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save Image"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deletingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center border border-slate-200">
            <div className="p-6">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Asset</h3>
              <p className="text-slate-500 text-sm mb-1">Are you sure you want to permanently delete this image?</p>
              <p className="text-slate-400 text-xs">This action cannot be undone.</p>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-3">
              <button 
                onClick={() => setDeletingImage(null)}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                disabled={isSubmitting}
                className="px-6 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors"
              >
                {isSubmitting ? "Deleting..." : "Delete Asset"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Restore Modal */}
      {restoringImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden text-center border border-slate-200">
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Restore Default</h3>
              <p className="text-slate-500 text-sm mb-1">Are you sure you want to restore the original image?</p>
              <p className="text-slate-400 text-xs">This will overwrite your current upload.</p>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-3">
              <button 
                onClick={() => setRestoringImage(null)}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                onClick={confirmRestore}
                disabled={isSubmitting}
                className="px-6 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-sm transition-colors"
              >
                {isSubmitting ? "Restoring..." : "Restore Image"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
