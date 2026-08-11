import dbConnect from "@/lib/mongodb";
import SiteImage from "@/models/SiteImage";
import Image from "next/image";
import Link from "next/link";

export default async function AdminDashboardPage() {
  await dbConnect();

  // Fetch dynamic stats
  const totalImages = await SiteImage.countDocuments();
  const distinctPages = await SiteImage.distinct("page");
  const recentUpdates = await SiteImage.find()
    .sort({ updatedAt: -1 })
    .limit(5)
    .lean();

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Premium Structured Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 text-center md:text-left">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Manage your digital assets, track recent content modifications, and oversee your portfolio with precision.
          </p>
        </div>
        <Link
          href="/admin/home"
          className="inline-flex shrink-0 items-center gap-2 bg-gradient-to-r from-[#7a1515] to-[#d84315] hover:opacity-90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm shadow-[#7a1515]/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          Quick Edit Home
        </Link>
      </div>

      {/* Structured Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl p-4 md:p-5 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Assets</h3>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">{totalImages}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FCF7ED] flex items-center justify-center text-[#7a1515] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          </div>
          <div className="text-[10px] md:text-[11px] text-slate-500 flex items-center gap-1.5 mt-2 md:mt-3 leading-none">
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            Active media files across the site
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-5 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Dynamic Routes</h3>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-none">{distinctPages.length}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#FCF7ED] flex items-center justify-center text-[#d84315] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
          </div>
          <div className="text-[10px] md:text-[11px] text-slate-500 flex items-center gap-1.5 mt-2 md:mt-3 leading-none">
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            CMS-connected application pages
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-5 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">System Status</h3>
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-none">Live & Synced</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>
          <div className="text-[10px] md:text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-2 md:mt-3 leading-none">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
            Database connection healthy
          </div>
        </div>
      </div>

      {/* Premium Activity Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Recent Content Updates</h2>
            <p className="text-sm text-slate-500 mt-0.5">The latest image modifications across the platform.</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="px-4 md:px-6 py-3 text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Media</th>
                <th className="px-4 md:px-6 py-3 text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Details</th>
                <th className="hidden md:table-cell px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                <th className="hidden lg:table-cell px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-4 md:px-6 py-3 text-[10px] md:text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentUpdates.map((item: any) => (
                <tr key={item._id.toString()} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-4 md:px-6 py-4">
                    <div className="w-16 h-12 md:w-20 md:h-14 relative rounded-md overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title || "Image preview"} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <p className="text-[13px] md:text-sm font-semibold text-slate-900 line-clamp-1">{item.title || "Untitled Asset"}</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono mt-0.5 md:mt-1 w-24 sm:w-48 truncate" title={item.imageUrl}>{item.imageUrl}</p>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                      <span className="uppercase">{item.page}</span>
                      <span className="text-slate-400">/</span>
                      <span className="uppercase text-slate-500">{item.section}</span>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell px-6 py-4 text-sm text-slate-600">
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(new Date(item.updatedAt))}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-right">
                    <Link 
                      href={`/admin/${item.page.split('-')[0]}`} 
                      className="inline-flex items-center gap-1 text-[13px] md:text-sm font-semibold text-slate-600 hover:text-[#7a1515] transition-colors"
                    >
                      <span className="hidden sm:inline">Edit Page</span>
                      <span className="sm:hidden">Edit</span>
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </td>
                </tr>
              ))}
              {recentUpdates.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No recent updates found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
