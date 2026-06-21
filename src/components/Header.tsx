import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-150 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl tracking-tight bg-gradient-to-r from-sky-600 to-indigo-700 bg-clip-text text-transparent">
              engMATH
            </div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none">
              Trung tâm bồi dưỡng văn hóa
            </p>
          </div>
        </div>

        {/* KISS English Logo Element as requested */}
        <div className="flex items-center gap-2.5 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-100">
          <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-[10px] font-black tracking-tighter uppercase border border-rose-100 shadow-sm shadow-rose-100 font-heading">
            KISS
          </div>
          <div className="text-right">
            <span className="block text-[11px] font-bold text-slate-800 tracking-tight leading-none font-heading">KISS English</span>
            <span className="block text-[8px] text-slate-400 uppercase tracking-wider font-semibold">Đối tác đồng hành</span>
          </div>
        </div>
      </div>
    </header>
  );
}
