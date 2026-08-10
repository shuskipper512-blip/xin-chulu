import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 text-white" style={{ background: 'var(--gradient-deep)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo和简介 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-serif">
                <span className="text-white">新</span>
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">出路</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              起源于大厂青年，致力于帮助更多青年人与创业者找到个人发展新出路的生态社区。
              <br />
              传递希望比贩卖焦虑更有价值。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold text-white mb-4">快速导航</h4>
            <div className="space-y-3">
              <a href="#story" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                我们的故事
              </a>
              <a href="#business" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                核心业务
              </a>
              <a href="#methodology" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                方法论
              </a>
              <a href="#talents" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                人才库
              </a>
            </div>
          </div>

          {/* 联系 */}
          <div>
            <h4 className="font-semibold text-white mb-4">加入我们</h4>
            <div className="space-y-3">
              <a href="#cases" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                成功案例
              </a>
              <a href="#join" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                如何加入
              </a>
              <a href="#contact" className="block text-stone-400 hover:text-amber-400 text-sm transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} 新出路. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm" style={{ color: 'var(--text-muted)' }}>
              Made with
              <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
              by
              <span className="text-amber-400">大树</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
