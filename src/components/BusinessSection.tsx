import { useEffect, useRef } from 'react';
import { Briefcase, Users, Zap, Heart } from 'lucide-react';
import { businesses } from '@/data/mockData';

export default function BusinessSection() {
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

  return (
    <section id="business" ref={sectionRef} className="section-padding px-6 relative bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-stone-200 shadow-sm">
            <Briefcase className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>核心业务</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            <span className="brand-text">ToB + ToC</span> 双轮驱动
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            围绕"人的发展"与"事的增长"双轮驱动，形成完整的商业生态闭环
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* ToB 业务 */}
        <div className="mb-16 fade-in-left">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-100 shadow-xl shadow-stone-200/50 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-700/30" style={{ background: 'var(--gradient-brand)' }}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>{businesses.toB.title}</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">企业服务</span>
                  </div>
                  <p className="text-amber-700 font-medium">{businesses.toB.subtitle}</p>
                </div>
              </div>

              <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {businesses.toB.description}
              </p>

              {/* 服务网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {businesses.toB.services.map((service, index) => (
                  <div
                    key={service.name}
                    className="group p-6 bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{service.name}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI 产品发布 */}
              <div className="rounded-2xl p-6 md:p-8" style={{ background: 'var(--gradient-deep)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-amber-400" />
                  <h4 className="text-xl font-bold text-white">{businesses.toB.aiProduct.title}</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {businesses.toB.aiProduct.services.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="text-stone-300 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ToC 业务 */}
        <div className="fade-in-right">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-100/30 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>{businesses.toC.title}</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">个人服务</span>
                  </div>
                  <p className="text-amber-600 font-medium">{businesses.toC.subtitle}</p>
                </div>
              </div>

              <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {businesses.toC.description}
              </p>

              {/* 服务网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businesses.toC.services.map((service, index) => (
                  <div
                    key={service.name}
                    className="group p-6 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{service.name}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 强调创造计划 */}
              <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-amber-300">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>创造计划</h4>
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded">重点推荐</span>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong>「创造计划」3V1转型陪跑服务</strong>：三位导师陪伴一位学员的深度转型项目。
                  从职场人转型到项目合伙人，让每个创作者都能实现热爱变现。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
