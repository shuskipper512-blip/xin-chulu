import { useEffect, useRef } from 'react';
import { ArrowRight, Send, Users, Briefcase, TrendingUp, Sparkles } from 'lucide-react';
import { joinSteps, cooperation } from '@/data/mockData';

export default function JoinSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="join" ref={sectionRef} className="section-padding px-6 relative bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-stone-200 shadow-sm">
            <Send className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>如何加入</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            四步开启你的<span className="brand-text">创造之旅</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            简单清晰的加入流程，让你快速融入创造计划的生态
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* 步骤流程 */}
        <div className="relative mb-20">
          {/* 连接线 - 桌面端 */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5">
            <div className="h-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {joinSteps.map((step, index) => (
              <div
                key={step.step}
                className="fade-in-up relative text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* 步骤圆圈 */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6">
                  {/* 外圈 */}
                  <div className="absolute inset-0 rounded-full border-2 border-amber-100" />
                  <div className="absolute inset-2 rounded-full bg-white shadow-md border border-amber-50" />

                  {/* 数字 */}
                  <span className="relative text-4xl font-bold brand-text">
                    {step.step}
                  </span>

                  {/* 连接线点 */}
                  {index < joinSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-amber-400 -translate-y-1/2 z-10" />
                  )}
                </div>

                {/* 标题 */}
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>

                {/* 描述 */}
                <p className="leading-relaxed text-sm" style={{ color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 合作邀约 */}
        <div className="mb-16 fade-in-up">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-amber-600" />
              <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>{cooperation.title}</h3>
            </div>

            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {cooperation.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cooperation.types.map((type, index) => (
                <div
                  key={type.title}
                  className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {index === 0 && <Users className="w-5 h-5 text-amber-600" />}
                    {index === 1 && <TrendingUp className="w-5 h-5 text-emerald-500" />}
                    {index === 2 && <Sparkles className="w-5 h-5 text-amber-500" />}
                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>{type.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部CTA */}
        <div className="text-center fade-in-up">
          <button
            onClick={scrollToContact}
            className="btn-brand px-12 py-5 rounded-2xl font-medium text-lg inline-flex items-center gap-3 shadow-xl shadow-amber-700/25"
          >
            立即申请加入
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            发送关键词后，请在公众号消息中简单介绍你的背景与期待
          </p>
        </div>
      </div>
    </section>
  );
}
