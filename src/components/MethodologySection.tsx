import { useEffect, useRef } from 'react';
import { Compass, Calendar, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { methodologies, seasons, fiveElementsQuestions } from '@/data/mockData';

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  calendar: Calendar,
  sparkles: Sparkles,
  'trending-up': TrendingUp,
};

export default function MethodologySection() {
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
    <section id="methodology" ref={sectionRef} className="section-padding px-6 relative bg-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-bg-warm opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-stone-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-stone-600 font-medium tracking-wider">核心方法论</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800 font-serif">
            一人公司的<span className="brand-text">系统方法</span>
          </h2>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            方法论的价值需要通过结果验证。四大核心方法论支撑起完整的商业实践体系
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* 方法论卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {methodologies.map((method, index) => {
            const IconComponent = iconMap[method.icon] || Compass;
            return (
              <div
                key={method.name}
                className="fade-in-up group p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-200 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-amber-700/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: 'var(--gradient-brand)' }}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{method.name}</h3>
                <p className="text-amber-700 font-medium mb-3">{method.description}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{method.details}</p>
              </div>
            );
          })}
        </div>

        {/* 四季模型 */}
        <div className="mb-20 fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-stone-800 font-serif mb-4">
              四季模型：<span className="brand-text">安排你的节奏</span>
            </h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              不懂节奏的人累死自己，懂节奏的人顺势而为。真实的商业跟种地一样，有播种、生长、收割、休耕。
            </p>
          </div>

          {/* 四季横向滚动 */}
          <div className="scroll-container -mx-6 px-6">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {seasons.map((season) => (
                <div
                  key={season.name}
                  className="scroll-item w-[340px] bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* 季节头部 */}
                  <div className={`p-6 bg-gradient-to-r ${season.color} text-white`}>
                    <h4 className="text-2xl font-bold mb-2">{season.name}</h4>
                    <p className="text-white/90 text-sm">目标：{season.target}</p>
                  </div>

                  {/* 季节内容 */}
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">关键动作</p>
                      <div className="space-y-2">
                        {season.actions.map((action) => (
                          <div key={action} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span className="text-stone-600 text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 常见错误 */}
                    <div className={`p-3 rounded-xl ${season.bgLight} border border-stone-100`}>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-stone-600 leading-relaxed">{season.error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 滚动提示 */}
          <div className="text-center mt-4">
            <span className="text-xs text-stone-400">← 左右滑动查看更多 →</span>
          </div>
        </div>

        {/* 五行六问 */}
        <div className="fade-in-up">
          <div className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden" style={{ background: 'var(--gradient-deep)' }}>
            {/* 装饰 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Compass className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl md:text-3xl font-bold font-serif">五行自检六问</h3>
              </div>

              <p className="text-stone-300 mb-8 leading-relaxed">
                拿出纸笔，诚实回答。哪一题答不上来，那就是你接下来的突破口。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fiveElementsQuestions.map((item, index) => (
                  <div
                    key={item.element}
                    className="group p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{item.element}</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors">
                      {item.question}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <p className="text-amber-300 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <strong>核心认知：</strong>用季度思维替代月度思维。一次集中发售，够吃三个月。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
