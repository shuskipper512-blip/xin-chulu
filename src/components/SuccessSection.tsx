import { useEffect, useRef } from 'react';
import { Trophy, TrendingUp, Target, Quote } from 'lucide-react';
import { successCases, testimonials } from '@/data/mockData';

export default function SuccessSection() {
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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up, .fade-in-left');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cases" ref={sectionRef} className="section-padding px-6 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>成功案例</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            实力验证：<span className="brand-text">标杆案例</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            方法论的价值需要通过结果验证。以下是我们服务过的部分代表性案例
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* 案例网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {successCases.map((caseItem, index) => (
            <div
              key={caseItem.name}
              className="fade-in-up group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-200 transition-all duration-500">
                {/* 图片/头部区域 */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-50 to-amber-50 overflow-hidden">
                  {caseItem.image ? (
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-amber-300 mx-auto mb-2" />
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>项目方向</span>
                      </div>
                    </div>
                  )}

                  {/* 行业标签 */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs rounded-full font-medium">
                      {caseItem.industry}
                    </span>
                  </div>
                </div>

                {/* 内容 */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-amber-700 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {caseItem.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{caseItem.service}</p>

                  <div className="flex items-start gap-2 mb-4">
                    <Target className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {caseItem.result}
                    </p>
                  </div>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 学员好评 */}
        {testimonials.length > 0 && (
          <div className="mb-16 fade-in-up">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-700/30" style={{ background: 'var(--gradient-brand)' }}>
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>学员真实反馈</h3>
              </div>

              <div className="scroll-container -mx-8 px-8">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="scroll-item w-[340px] md:w-[400px] bg-white rounded-2xl p-4 shadow-lg shadow-amber-100/30 border border-amber-100"
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.alt}
                        className="w-full rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 数据总览 */}
        <div className="fade-in-up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* 装饰 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">平台数据总览</h3>
                <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                  这些数字背后，是每一个具体的个人改变与业务增长
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold brand-text mb-2">100+</div>
                  <p style={{ color: 'var(--text-muted)' }}>场活动</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold brand-text mb-2">20万字+</div>
                  <p style={{ color: 'var(--text-muted)' }}>内容产出</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold brand-text mb-2">5000+</div>
                  <p style={{ color: 'var(--text-muted)' }}>影响人次</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold brand-text mb-2">100条</div>
                  <p style={{ color: 'var(--text-muted)' }}>深度访谈</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700">
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>品牌合作方：</span>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    合作覆盖个人成长、知识服务、企业创新与内容共创等方向
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
