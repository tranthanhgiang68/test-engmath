import React from 'react';
import { Quote, Award, Sparkles, BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function MentorCard() {
  return (
    <div className="space-y-8">
      {/* Dynamic Intro Card */}
      <div className="bg-gradient-to-br from-white to-sky-50/40 p-6 sm:p-8 rounded-3xl border border-sky-100/60 shadow-xl shadow-slate-100/50">
        <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 py-1.5 px-3 rounded-full text-xs font-semibold mb-6 border border-sky-100/50">
          <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
          Chương Trình Đặc Biệt 2026
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.12] tracking-tight">
          CHUYÊN LUYỆN THI <br />
          <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
            TOÁN 1-1
          </span>
        </h1>

        <p className="mt-4 font-heading text-lg sm:text-xl font-bold text-indigo-950 leading-relaxed">
          &ldquo;Đây Không Chỉ Là Một Khoá Học - Đây Là Chương Trình Đồng Hành Cùng Bạn&rdquo;
        </p>

        {/* Motivational Olympic Quote Block */}
        <div className="mt-6 relative bg-white/85 p-5 rounded-2xl border border-indigo-50/50 shadow-sm">
          <Quote className="absolute top-3 right-4 w-10 h-10 text-slate-100 -scale-x-100" />
          <p className="text-slate-600 italic leading-relaxed text-sm sm:text-base pr-4 relative z-10">
            &ldquo;Các vận động viên Olympic đều có một huấn luyện viên. Các CEO thông thái đều có một huấn luyện viên.&rdquo;
          </p>
          <p className="mt-3 text-sm text-slate-700 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Bí quyết bứt phá ngoạn mục
          </p>
        </div>
      </div>

      {/* Portrait of Founder Ms. Thủy with Story */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-150/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar frame for Ms. Thủy */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-2xl rotate-3 scale-102 opacity-75 blur-[2px]" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Chân dung cô Thủy - Sáng lập engMATH"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience batch */}
            <span className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-lg border border-indigo-500/30">
              20 Năm Kinh Nghiệm
            </span>
          </div>

          <div className="text-center sm:text-left space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="font-heading font-extrabold text-2xl text-slate-900">Ms. Thủy</h2>
              <CheckCircle className="w-5 h-5 text-sky-500 fill-sky-50" />
            </div>
            <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider">
              Sáng lập trung tâm văn hóa engMATH
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
              <div className="flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                Thời gian linh hoạt
              </div>
              <div className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-semibold">
                <Award className="w-3.5 h-3.5 text-indigo-500" />
                Toán Tiếng Anh 1-1
              </div>
            </div>
          </div>
        </div>

        {/* Biography story section */}
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-5">
          <p className="font-medium text-slate-800">
            Hãy tưởng tượng, bạn sẽ thay đổi thế nào khi sở hữu riêng một &ldquo;huấn luyện viên&rdquo; đồng hành cùng bạn trên hành trình học tiếng Anh?
          </p>
          <p>
            Chào mừng bạn đến với chương trình <span className="font-bold text-sky-700">&ldquo;Huấn Luyện Viên Toán Tiếng Anh&rdquo;</span>. Tại đây, chúng ta không chỉ học tiếng Anh một cách thông thường, mà còn tạo ra một sự thay đổi thực sự trong cuộc sống của bạn.
          </p>
          <p>
            Với kinh nghiệm <span className="font-semibold text-slate-900">20 năm giảng dạy</span> và đồng hành cùng nhiều thế hệ học viên, Thuỷ đã tổng hợp những tư duy, phương pháp và chiến lược hiệu quả để giúp mọi người xây dựng nền tảng vững chắc và sử dụng tiếng Anh một cách tự tin, thông qua một chương trình đơn giản và phù hợp với tất cả mọi người.
          </p>
          <p>
            Chương trình này không chỉ là một khoá học, mà nó thực sự là một khoá huấn luyện mạnh mẽ. Giúp bạn vượt qua giới hạn của bản thân, vượt qua những thách thức và biến giấc mơ <span className="font-bold text-indigo-600">&ldquo;chinh phục Toán tiếng Anh&rdquo;</span> thành thực tại.
          </p>
          <p>
            Một hành trình học tập đầy ý nghĩa đang chờ đợi bạn. Biến chính bản thân bạn trở nên phi thường từ xuất phát điểm hiện tại. Hãy để chương trình này trở thành người bạn đồng hành đáng tin cậy trên con đường tiến tới thành công trong việc học tiếng Anh và cuộc sống của bạn!
          </p>
          <div className="bg-sky-50/50 p-4 rounded-2xl border border-sky-100/40 text-sky-950 font-medium">
            &ldquo;Sẵn sàng để khám phá, học hỏi và tiến xa hơn cùng chương trình &apos;Huấn Luyện Bạn Đến Thành Công Với Toán Tiếng Anh&apos;.&rdquo;
          </div>
          <p className="text-slate-500 font-medium text-sm italic">
            Hãy điền thông tin của bạn vào form bên dưới để được tư vấn chương trình và lộ trình học, dành riêng cho bạn.
          </p>
        </div>
      </div>
    </div>
  );
}
