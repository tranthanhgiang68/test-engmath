import React, { useState } from 'react';
import Header from './components/Header';
import MentorCard from './components/MentorCard';
import EngagementForm from './components/EngagementForm';
import ThankYou from './components/ThankYou';
import { Calendar, Shield, Award, Users, Heart } from 'lucide-react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    setSubmitted(true);
    // Smooth scroll to top when transitioned to Thank You page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-950">
      {/* Absolute top thin announcement bar */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white text-[11px] font-bold py-2.5 px-4 text-center tracking-wider uppercase">
        ⚡ Chương trình Đồng hành Luyện thi chất lượng cao — Số lượng học viên giới hạn
      </div>

      {/* Main Header */}
      <Header />

      {/* Content wrapper */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Story and Mentor Information (takes 7 columns on desktop) */}
            <div className="lg:col-span-7 space-y-8">
              <MentorCard />
              
              {/* Trust Indicators / Core Values */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 text-sky-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide">Cá nhân hóa</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Lộ trình học riêng biệt cho từng năng lực học viên.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide">Chất lượng cao</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Giáo trình bám sát 2018 Kết nối tri thức.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Engagement Form (takes 5 columns on desktop) */}
            <div className="lg:col-span-5">
              <EngagementForm onSuccess={handleSuccess} />
            </div>
          </div>
        ) : (
          /* Thank You Screen */
          <div className="py-8 sm:py-16">
            <ThankYou onBack={handleBack} />
          </div>
        )}
      </main>

      {/* Modern footer */}
      <footer className="bg-white border-t border-slate-150 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex justify-center items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>© {new Date().getFullYear()} Học viện bồi dưỡng văn hóa engMATH. All rights reserved.</span>
          </div>
          
          {/* Signature field as explicitly requested */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span className="text-sm font-heading font-extrabold text-slate-800 tracking-wide uppercase">
              Trần Vũ Trụ Di Ang
            </span>
          </div>
          
          <p className="text-[10px] text-slate-400 max-w-md mx-auto leading-relaxed">
            Học tập thực chất — Thành quả bền vững. Đối tác chính thức đồng hành cùng KISS English & engMATH.
          </p>
        </div>
      </footer>
    </div>
  );
}
