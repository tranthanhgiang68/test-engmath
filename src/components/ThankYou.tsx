import React from 'react';
import { CheckCircle2, MessageCircle, ArrowLeft, ExternalLink, Sparkles, Smile } from 'lucide-react';

interface ThankYouProps {
  onBack: () => void;
}

export default function ThankYou({ onBack }: ThankYouProps) {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-center space-y-8 animate-fadeIn">
      {/* Decorative success glowing badge */}
      <div className="relative inline-flex mb-2">
        <div className="absolute inset-0 bg-emerald-100 rounded-full scale-130 opacity-40 blur-md animate-pulse" />
        <div className="relative w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 shadow-xl shadow-emerald-50">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full font-bold border border-sky-100">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          Đăng ký thành công
        </div>
        <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
          Cảm ơn bạn đã đặt lịch tư vấn!
        </h2>
        <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
          Đội ngũ <span className="font-bold text-sky-700">EngMath-ttgiang</span> sẽ sớm liên lạc với bạn trong thời gian ngắn nhất để đồng hành cùng học viên.
        </p>
      </div>

      {/* Primary Communication/Action panel */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 space-y-4">
        <div className="flex items-center justify-center gap-1 text-xs text-slate-400 font-bold uppercase tracking-wider">
          <Smile className="w-4 h-4 text-slate-400" />
          Liên hệ trực tiếp với chúng tôi qua
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Zalo Button */}
          <a
            href="https://www.24h.com.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-sky-400/10 cursor-pointer border border-sky-400/20 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Zalo icon representation */}
            <span className="w-5 h-5 rounded-full bg-white text-blue-600 font-black text-xs flex items-center justify-center">Z</span>
            Qua Zalo
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Messenger Button */}
          <a
            href="https://www.24h.com.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:opacity-95 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-purple-400/10 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            Qua Messenger
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Back link */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-600 py-2 px-4 rounded-xl hover:bg-slate-100/60 transition-all cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Quay lại trang đặt lịch
      </button>
    </div>
  );
}
