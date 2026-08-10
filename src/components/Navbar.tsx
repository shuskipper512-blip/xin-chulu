import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'story', label: '故事' },
  { id: 'methodology', label: '方法论' },
  { id: 'talents', label: '人才' },
  { id: 'cases', label: '案例' },
  { id: 'activities', label: '活动' },
  { id: 'business', label: '业务' },
  { id: 'join', label: '加入' },
  { id: 'contact', label: '联系' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-amber-100/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'var(--gradient-brand)' }}
          >
            <span className="text-white font-serif text-lg font-bold">树</span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="font-serif text-lg font-bold leading-none" style={{ color: 'var(--text-primary)' }}>
              新出路
            </div>
            <div className="font-display text-xs italic" style={{ color: 'var(--brand-secondary)' }}>
              A New Way Out
            </div>
          </div>
        </button>

        {/* 桌面端导航 */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover-underline transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden lg:inline-flex btn-brand px-5 py-2.5 rounded-lg text-sm font-medium items-center gap-2"
        >
          申请加入
        </button>

        {/* 移动端菜单按钮 */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-amber-100">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-3 rounded-lg text-left text-sm font-medium hover:bg-amber-50 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-brand mt-2 px-4 py-3 rounded-lg text-sm font-medium"
            >
              申请加入
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
