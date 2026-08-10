import { Check, Copy, Mail, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const contactPaths = [
  {
    keyword: '创造计划',
    title: '个人成长与转型',
    description: '适合正在梳理方向、探索个人事业或希望参与真实项目的人。',
  },
  {
    keyword: '合作',
    title: '项目与企业合作',
    description: '适合知识 IP、创业团队、品牌方与关注人才发展的组织。',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const copyKeyword = async (keyword: string) => {
    await navigator.clipboard.writeText(keyword);
    setCopied(keyword);
    window.setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding px-6 relative bg-gradient-to-b from-stone-50 to-white">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white border border-stone-200 shadow-sm">
            <Mail className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-secondary)' }}>联系我们</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: 'var(--text-primary)' }}>
            与你共同探索<span className="brand-text">新出路</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            微信搜索公众号「新出路」，发送对应关键词。<br className="hidden md:block" />
            我们会根据你的方向继续沟通。
          </p>
          <div className="divider-brand mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-up">
          {contactPaths.map((path) => (
            <article key={path.keyword} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--brand-soft)' }}>
                <MessageCircle className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-3" style={{ color: 'var(--text-primary)' }}>{path.title}</h3>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{path.description}</p>
              <div className="rounded-2xl p-4 flex items-center justify-between gap-4" style={{ background: 'var(--bg-warm)' }}>
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>发送关键词</p>
                  <p className="text-lg font-bold" style={{ color: 'var(--brand-primary)' }}>「{path.keyword}」</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyKeyword(path.keyword)}
                  className="btn-outline px-4 py-2.5 rounded-xl inline-flex items-center gap-2 text-sm font-medium"
                  aria-label={`复制关键词${path.keyword}`}
                >
                  {copied === path.keyword ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied === path.keyword ? '已复制' : '复制关键词'}
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm mt-8 fade-in-up" style={{ color: 'var(--text-muted)' }}>
          本页不会收集或上传你的姓名、手机号等个人信息。
        </p>
      </div>
    </section>
  );
}
