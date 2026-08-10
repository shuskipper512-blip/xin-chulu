import { useEffect, useRef } from 'react';
import { Camera, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { activityPhotos, activities } from '@/data/mockData';

export default function ActivitySection() {
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
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="activities" ref={sectionRef} className="section-padding px-6 relative bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
            <Camera className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>活动回顾</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            往期<span className="brand-text">精彩瞬间</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
            线下深度连接，面对面共创
            <br />
            每一场活动，都是一次思想的碰撞与升级
          </p>

          <div className="divider-brand mx-auto mt-8" />
        </div>

        {/* 照片瀑布流 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-16">
          {activityPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="fade-in-up group relative overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`aspect-[4/5] md:aspect-[3/4] ${index % 3 === 0 ? 'md:row-span-2 md:aspect-[3/6]' : ''}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* 悬浮遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* 活动列表卡片 */}
        <div className="scroll-container -mx-6 px-6 fade-in-up">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="scroll-item w-[320px] group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-200 transition-all duration-500 h-full">
                  {/* 封面图 */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                    {activity.cover && (
                      <img
                        src={activity.cover}
                        alt={activity.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* 日期标签 */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/80" />
                      <span className="text-xs font-medium text-white/90">{activity.date}</span>
                    </div>

                    {/* 查看箭头 */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-amber-700" />
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-amber-700 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {activity.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <div className="flex flex-wrap gap-1">
                        {activity.cities.map((city) => (
                          <span key={city} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 更多活动 */}
            <div className="scroll-item w-[320px] flex items-center justify-center">
              <div className="w-full h-full min-h-[280px] rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <ArrowUpRight className="w-6 h-6 group-hover:text-amber-600 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </div>
                <span style={{ color: 'var(--text-muted)' }}>更多活动持续更新</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>← 左右滑动查看更多 →</span>
        </div>
      </div>
    </section>
  );
}
