import { Sparkles, ArrowDown, Users, Calendar, BookOpen, Heart, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { brandData } from '@/data/mockData';

export default function Hero() {
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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, number: brandData.stats.events, label: '场活动', color: 'var(--accent-blue)' },
    { icon: BookOpen, number: brandData.stats.content, label: '内容产出', color: 'var(--brand-primary)' },
    { icon: Users, number: brandData.stats.people, label: '影响人次', color: 'var(--accent-green)' },
    { icon: Heart, number: brandData.stats.stories, label: '深度访谈', color: 'var(--brand-primary)' },
  ];

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* 背景装饰 - 杂志感光晕 */}
      <div className="absolute inset-0 paper-texture" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full animate-breathe"
           style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full animate-breathe"
           style={{ background: 'radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)', animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(245,230,211,0.8) 0%, transparent 70%)' }} />

      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-brand)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* 品牌标签 */}
          <div className="fade-in-up mb-10">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 shadow-lg shadow-amber-100/50">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
              <span className="text-sm font-medium tracking-widest" style={{ color: 'var(--brand-primary)' }}>
                新出路 · 大树
              </span>
            </div>
          </div>

          {/* 主标题 - 杂志感排版 */}
          <div className="fade-in-up mb-8" style={{ animationDelay: '100ms' }}>
            <p className="font-display text-2xl md:text-3xl mb-4 italic" style={{ color: 'var(--brand-secondary)' }}>
              A New Way Out
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none tracking-tight"
                style={{ color: 'var(--text-primary)' }}>
              新<span className="brand-text">出路</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px" style={{ background: 'var(--brand-secondary)' }} />
              <span className="font-display text-lg italic" style={{ color: 'var(--brand-secondary)' }}>
                since 2020
              </span>
              <div className="w-16 h-px" style={{ background: 'var(--brand-secondary)' }} />
            </div>
          </div>

          {/* 副标题 */}
          <p className="fade-in-up text-2xl md:text-3xl font-serif mb-6 font-light"
             style={{ color: 'var(--text-secondary)', animationDelay: '200ms' }}>
            {brandData.tagline}
          </p>

          {/* 描述 */}
          <p className="fade-in-up text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light"
             style={{ color: 'var(--text-muted)', animationDelay: '300ms' }}>
            {brandData.description}
          </p>

          {/* 数据统计 - 优雅排版 */}
          <div className="fade-in-up flex flex-wrap justify-center gap-10 md:gap-16 mb-16" style={{ animationDelay: '400ms' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                     style={{ background: stat.color, boxShadow: `0 10px 30px ${stat.color}33` }}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-serif mb-1" style={{ color: stat.color }}>{stat.number}</div>
                <div className="text-sm tracking-wider" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA 按钮 */}
          <div className="fade-in-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '500ms' }}>
            <button
              onClick={scrollToStory}
              className="btn-brand px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2"
            >
              读大树的故事
              <ArrowDown className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="btn-outline px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2"
            >
              加入我们
            </button>
            <a
              href={`${import.meta.env.BASE_URL}xin-chulu-intro.pdf`}
              download="新出路-对外介绍册.pdf"
              className="px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 bg-white/80 border border-amber-200 text-amber-800 hover:bg-white transition-colors"
            >
              <Download className="w-5 h-5" />
              下载 PDF
            </a>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="fade-in-up absolute bottom-10 left-1/2 -translate-x-1/2 text-center" style={{ animationDelay: '600ms' }}>
          <div className="relative w-8 h-12 mx-auto mb-3 rounded-full border-2" style={{ borderColor: 'var(--brand-secondary)' }}>
            <div className="absolute left-1/2 top-2 -translate-x-1/2 w-1.5 h-3 rounded-full animate-bounce"
                 style={{ background: 'var(--brand-primary)' }} />
          </div>
          <span className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>向下滚动</span>
        </div>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }} />
    </section>
  );
}
