import { useEffect, useRef } from 'react';
import { BookOpen, Quote, Sprout, Zap, Users, Leaf, TreeDeciduous, Sun, CheckCircle2, Heart, Lightbulb } from 'lucide-react';

// 合并后的故事时间线数据 —— 个人故事 + 新出路发展历程融合
const storyTimeline = [
  {
    year: '2019',
    tag: '起点',
    tagColor: 'var(--accent-blue)',
    tagBg: 'var(--accent-blue-soft)',
    icon: Sprout,
    title: '困在系统里的大厂人',
    subtitle: '一切看起来都很"稳定"',
    story: '那时候我在阿里做金融业务，拿着不错的薪水，住着公司附近的房子。一切看起来都很"稳定"。但我知道不对。那种感觉就像——你在一艘正在下沉的豪华邮轮上，船上的人都在跳舞，而你已经闻到了海水的味道。',
    highlight: '30岁那年，我问了自己一个问题：如果离开大厂，我还能靠什么吃饭？',
    milestones: ['阿里金融业务', '30岁的人生追问', '决定离开大厂'],
  },
  {
    year: '2020',
    tag: '至暗',
    tagColor: 'var(--brand-primary)',
    tagBg: 'var(--brand-soft)',
    icon: Zap,
    title: '裸辞后的至暗时刻',
    subtitle: '银行卡里只剩两千块',
    story: '2019年底，我从阿里离职。我以为凭自己的履历，做点什么不行？现实给了我一记响亮的耳光。做过知识付费、开过社群、搞过训练营……三个月，花了十几万，颗粒无收。最惨的时候，银行卡里只剩下两千块钱。',
    highlight: '我才明白：大厂的光环是平台的，不是你的。离开平台，你什么都不是。',
    milestones: ['离职后创业失败', '十几万打了水漂', '触底反弹的开始'],
  },
  {
    year: '2020-2021',
    tag: '转机',
    tagColor: 'var(--accent-green)',
    tagBg: 'var(--accent-green-soft)',
    icon: Leaf,
    title: '把经验变成方法',
    subtitle: '从"靠感觉"到"有章法"',
    story: '跌到谷底之后，我开始重新思考。不再追风口，不再照搬别人的模式，而是回到自己身上——我到底是谁？我真正擅长什么？2020年，我开始把过往经验梳理成职业转型方法，并在视频号持续分享。后来，我完成了第一次从内容到产品、再到真实交付的闭环。',
    highlight: '我第一次相信：离开平台之后，也可以靠自己的经验与行动，慢慢建立一条新路。',
    milestones: ['开始公开分享', '梳理职业转型方法', '完成产品与交付闭环', '持续迭代'],
  },
  {
    year: '2022',
    tag: '生长',
    tagColor: 'var(--accent-green)',
    tagBg: 'var(--accent-green-soft)',
    icon: TreeDeciduous,
    title: '从"我"到"我们"',
    subtitle: '一个人走得快，一群人走得远',
    story: '越来越多人来找我：大树，我也想转型，但不知道从哪开始。我开始做一对一咨询，做社群，做共创会。从一对一到社群运营，从线上分享到线下活动——第一届创造大会办起来了，新出路社群初具雏形。',
    highlight: '新出路不是我一个人的故事，是每一个敢于重新选择的人的故事。',
    milestones: ['线上分享', '创造大会', '社群共创', '真实项目实践'],
  },
  {
    year: '2023',
    tag: '沉淀',
    tagColor: 'var(--accent-blue)',
    tagBg: 'var(--accent-blue-soft)',
    icon: BookOpen,
    title: '创造计划启动 + 方法论沉淀',
    subtitle: '从"靠感觉"到"有章法"',
    story: '持续实践沉淀出"五行人货场""四季模型""三生合一"等核心方法。我们做了"创造计划"——不是贩卖一条标准答案，而是陪你把心里那个"想做但不敢做"的事，变成一步步可验证的行动。',
    highlight: '传递希望比贩卖焦虑更有价值。这是新出路从第一天起就刻在骨子里的东西。',
    milestones: ['创造计划启动', '四季模型发布', '引路人共创', '核心方法体系成型'],
  },
  {
    year: '2024-2025',
    tag: '生态',
    tagColor: 'var(--accent-green)',
    tagBg: 'var(--accent-green-soft)',
    icon: Sun,
    title: '项目合伙制落地，生态成型',
    subtitle: '从培训教育走向生态共建',
    story: '有人从大厂辞职做了心理咨询师，有人从零开始做起了旅行主理人，有人把自己的专业变成了一门课程……创造大会三地举办，项目合伙制跑通，多个IP发售成功。新出路还在成长——我们的目标不是做多大，而是帮多少人真正改变。',
    highlight: '每一个人的故事，都是新出路的故事。下一个章节，等你来写。',
    milestones: ['创造大会三地举办', '项目合伙制跑通', '多个IP发售成功案例', '一人公司AI共创节'],
  },
];

const values = [
  { title: '真诚', desc: '不贩卖焦虑，不画大饼，说真话', color: 'var(--brand-primary)', bg: 'var(--brand-soft)' },
  { title: '实干', desc: '想得再多不如先干起来', color: 'var(--accent-blue)', bg: 'var(--accent-blue-soft)' },
  { title: '长期主义', desc: '做难而正确的事，时间会给答案', color: 'var(--accent-green)', bg: 'var(--accent-green-soft)' },
  { title: '共创', desc: '一个人走得快，一群人走得远', color: 'var(--brand-primary)', bg: 'var(--brand-soft)' },
];

export default function StorySection() {
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
    <section id="story" ref={sectionRef} className="section-padding px-6 relative overflow-hidden" style={{ background: 'var(--bg-warm)' }}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 paper-texture" />
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full animate-breathe" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full animate-breathe" style={{ background: 'radial-gradient(circle, rgba(74,144,164,0.08) 0%, transparent 70%)', animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full animate-breathe" style={{ background: 'radial-gradient(circle, rgba(63,122,92,0.08) 0%, transparent 70%)', animationDelay: '4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full" style={{ background: 'var(--brand-soft)' }}>
            <BookOpen className="w-4 h-4" style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--brand-primary)' }}>大树与新出路</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight" style={{ color: 'var(--text-primary)' }}>
            一个大厂人的出走，
            <br />
            <span style={{ background: 'var(--gradient-rainbow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              一群人的新出路
            </span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            从阿里金融业务离开，到持续探索职业转型，再到发起一群人的共创
          </p>

          {/* 金句 */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-sm border border-amber-100">
            <Quote className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--brand-secondary)' }} />
            <p className="text-lg font-serif italic" style={{ color: 'var(--brand-primary)' }}>
              "我走过的弯路，希望你不用再走一遍。"
            </p>
          </div>

          <div className="divider-brand mx-auto mt-10" />
        </div>

        {/* 合并后的时间线故事 */}
        <div className="relative">
          {/* 中间竖线 - 桌面端 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
               style={{ background: 'linear-gradient(to bottom, transparent, var(--accent-blue-light), var(--accent-green-light), var(--brand-secondary), var(--accent-green-light), transparent)' }} />

          <div className="space-y-20">
            {storyTimeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={item.year} className="relative fade-in-up" style={{ animationDelay: `${index * 120}ms` }}>
                  {/* 桌面端布局 - 左右交替 */}
                  <div className={`hidden md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* 内容卡片 */}
                    <div className="w-5/12">
                      <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100/50 hover:shadow-lg hover:border-amber-200 transition-all duration-500 relative overflow-hidden group">
                        {/* 顶部彩条 */}
                        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${item.tagColor}, transparent)` }} />

                        <div className="relative">
                          {/* 标签 + 年份 */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                                  style={{ background: item.tagBg, color: item.tagColor }}>
                              <Icon className="w-3.5 h-3.5" />
                              {item.tag}
                            </span>
                            <span className="font-display text-xl italic" style={{ color: 'var(--brand-secondary)' }}>
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--text-primary)' }}>
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium mb-4" style={{ color: item.tagColor }}>
                            {item.subtitle}
                          </p>

                          <p className="mb-6 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {item.story}
                          </p>

                          {/* 里程碑 */}
                          <div className="flex flex-wrap gap-2">
                            {item.milestones.map((m, i) => (
                              <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs"
                                    style={{ background: 'var(--bg-warm)', color: 'var(--text-secondary)' }}>
                                <CheckCircle2 className="w-3 h-3" style={{ color: item.tagColor }} />
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 中间节点 */}
                    <div className="w-2/12 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center z-10 mb-2"
                           style={{ background: 'white', border: `3px solid ${item.tagColor}`, boxShadow: `0 0 20px ${item.tagColor}40` }}>
                        <Icon className="w-5 h-5" style={{ color: item.tagColor }} />
                      </div>
                    </div>

                    {/* 另一侧 - 高亮金句 */}
                    <div className="w-5/12">
                      <div className="relative pl-6 border-l-4" style={{ borderColor: item.tagColor }}>
                        <Quote className="absolute -top-2 -left-1 w-7 h-7 opacity-15" style={{ color: item.tagColor }} />
                        <p className="text-lg md:text-xl font-serif font-medium leading-relaxed pt-2" style={{ color: 'var(--brand-deep)' }}>
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 移动端布局 */}
                  <div className="md:hidden flex gap-4">
                    {/* 时间线竖线 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 mb-2"
                           style={{ background: 'white', border: `2.5px solid ${item.tagColor}`, boxShadow: `0 0 10px ${item.tagColor}40` }}>
                        <Icon className="w-4 h-4" style={{ color: item.tagColor }} />
                      </div>
                      <div className="w-0.5 flex-1" style={{ background: `${item.tagColor}40` }} />
                    </div>

                    {/* 内容卡片 */}
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100/50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${item.tagColor}, transparent)` }} />

                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: item.tagBg, color: item.tagColor }}>
                            <Icon className="w-3 h-3" />
                            {item.tag}
                          </span>
                          <span className="font-display text-sm italic" style={{ color: 'var(--brand-secondary)' }}>
                            {item.year}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold mb-1 font-serif" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium mb-3" style={{ color: item.tagColor }}>
                          {item.subtitle}
                        </p>

                        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.story}
                        </p>

                        {/* 高亮句 */}
                        <div className="p-3 rounded-lg mb-4" style={{ background: item.tagBg }}>
                          <p className="text-sm font-serif font-medium leading-relaxed" style={{ color: 'var(--brand-deep)' }}>
                            {item.highlight}
                          </p>
                        </div>

                        {/* 里程碑 */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.milestones.map((m, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs"
                                  style={{ background: 'var(--bg-warm)', color: 'var(--text-secondary)' }}>
                              <CheckCircle2 className="w-2.5 h-2.5" style={{ color: item.tagColor }} />
                              {m}
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

        {/* 核心价值观 */}
        <div className="mt-28 fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4" style={{ color: 'var(--text-primary)' }}>
              我们相信的事
            </h3>
            <div className="divider-brand mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const icons = [Lightbulb, Heart, BookOpen, Users];
              const Icon = icons[index];
              return (
                <div key={value.title}
                     className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-amber-100/50 hover:shadow-lg transition-all duration-500">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                       style={{ background: value.bg }}>
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 font-serif" style={{ color: 'var(--text-primary)' }}>
                    {value.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部CTA */}
        <div className="mt-20 fade-in-up">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--brand-deep), var(--accent-blue), var(--accent-green))' }}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-amber-400/30 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-green-300/20 translate-y-1/2 blur-3xl" />
            </div>

            <div className="relative p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                你的故事，也可以从这里开始
              </h3>
              <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90">
                新出路不是一个人的传奇，是每一个敢于重新选择的人的故事集合。
                <br />
                下一个章节，等你来写。
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-medium text-lg inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'white', color: 'var(--brand-deep)' }}
              >
                开启你的新出路
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
