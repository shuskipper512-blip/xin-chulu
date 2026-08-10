import { useEffect, useRef } from 'react';
import { Users, Award, Crown, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { talents, partners } from '@/data/mockData';

export default function TalentSection() {
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

  const featuredTalents = talents.filter(t => t.featured);
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'founder': return { icon: Crown, label: '创始人', color: 'bg-amber-500' };
      case 'member': return { icon: Star, label: '核心成员', color: 'bg-amber-700' };
      case 'partner': return { icon: Award, label: '标杆案例', color: 'bg-amber-700' };
      default: return { icon: Users, label: '合作伙伴', color: 'bg-amber-800' };
    }
  };

  return (
    <section id="talents" ref={sectionRef} className="section-padding px-6 relative bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full" style={{ background: 'var(--brand-soft)' }}>
            <Users className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--brand-primary)' }}>人才展示</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            优秀<span className="brand-text">人才</span>汇聚
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            这里不仅是一个社群，更是一个生态社区，一个让想法落地、让人脉链接、让转型发生的真实场域
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* 核心人才大卡片 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 fade-in-left">
            <Crown className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
            <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>核心人才</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTalents.map((talent, index) => {
              const typeInfo = getTypeLabel(talent.type);
              const TypeIcon = typeInfo.icon;
              return (
                <div
                  key={talent.id}
                  className="fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-3xl border border-amber-100/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-200 transition-all duration-500">
                    <div className="flex flex-col md:flex-row">
                      {/* 头像区域 */}
                      <div className="md:w-1/3 bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex flex-col items-center justify-center">
                        {talent.avatar ? (
                          <img
                            src={talent.avatar}
                            alt={talent.name}
                            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg border-4 border-white" style={{ background: 'var(--gradient-brand)' }}>
                            <span className="text-5xl text-white font-bold font-serif">{talent.name[0]}</span>
                          </div>
                        )}

                        {/* 标签 */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          <span className={`px-3 py-1 ${typeInfo.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}>
                            <TypeIcon className="w-3 h-3" />
                            {typeInfo.label}
                          </span>
                          {talent.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/80 text-xs rounded-full" style={{ color: 'var(--text-muted)' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 信息区域 */}
                      <div className="md:w-2/3 p-6 md:p-8">
                        <div className="mb-4">
                          <h4 className="text-2xl font-bold font-serif mb-1" style={{ color: 'var(--text-primary)' }}>{talent.name}</h4>
                          <p className="font-medium" style={{ color: 'var(--brand-primary)' }}>{talent.title}</p>
                        </div>

                        <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                          {talent.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {talent.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 bg-amber-50 text-xs rounded-lg" style={{ color: 'var(--text-muted)' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 引路人嘉宾 - 横向滚动 */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
            <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--text-primary)' }}>多领域引路人网络</h3>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>（部分方向）</span>
          </div>

          <div className="scroll-container -mx-6 px-6">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="scroll-item w-[200px] group"
                >
                  <div className="bg-white rounded-2xl border border-amber-100/50 p-5 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group-hover:from-amber-100 group-hover:to-orange-100 transition-all">
                      <span className="text-xl text-slate-500 font-bold group-hover:text-amber-700 transition-colors">
                        {partner.name[0]}
                      </span>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{partner.name}</h4>
                      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>{partner.title}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* 更多嘉宾 */}
              <div className="scroll-item w-[200px] flex items-center justify-center">
                <div className="w-full h-full min-h-[140px] rounded-2xl border-2 border-dashed border-amber-300 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="text-sm text-slate-500">更多方向持续加入</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>← 左右滑动查看更多嘉宾 →</span>
          </div>
        </div>

        {/* 加入召唤 */}
        <div className="fade-in-up">
          <div className="rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden" style={{ background: 'var(--gradient-brand)' }}>
            {/* 装饰 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full translate-y-1/2" />
            </div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">成为创造计划的一员</h3>
              <p className="text-amber-100 max-w-xl mx-auto mb-8">
                加入我们，与不同领域的引路人与行动伙伴一起，开启你的创造之旅
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-amber-700 font-medium rounded-xl hover:bg-amber-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                立即申请加入
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
