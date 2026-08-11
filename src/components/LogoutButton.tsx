"use client";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function LogoutButton() {
  const [showModal, setShowModal] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    setIsSigningOut(true);
    signOut({ callbackUrl: "/login" });
  };

  const modalContent = showModal ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[400px] text-center p-6 sm:p-8 animate-fade-in-up">
        
        <h3 className="text-xl font-bold text-slate-800 mb-3">Confirm Logout</h3>
        <p className="text-slate-500 text-[15px] leading-relaxed max-w-[280px] mx-auto mb-8">
          Are you sure you want to log out of the Admin Dashboard?
        </p>
        
        <div className="flex justify-center gap-3 sm:gap-4">
          <button 
            onClick={() => setShowModal(false)}
            className="flex-1 py-2.5 text-[15px] font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-lg transition-colors focus:outline-none"
            disabled={isSigningOut}
          >
            Cancel
          </button>
          <button 
            onClick={handleLogout}
            disabled={isSigningOut}
            className="flex-1 py-2.5 text-[15px] font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors focus:outline-none"
          >
            {isSigningOut ? "Signing out..." : "Sign out"}
          </button>
        </div>

      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        title="Sign Out"
        className="p-2 text-gray-500 hover:text-maroon-800 hover:bg-maroon-50 rounded-lg transition-colors ml-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>

      {/* Logout Confirmation Modal (Portaled) */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
