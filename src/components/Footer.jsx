import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-40 border-t border-white/20 backdrop-blur-xl bg-black/40 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-2 text-orange-200 mb-4">
          <Coffee className="w-5 h-5" />
          <span>С любовью и горячим чаем</span>
          <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
        </div>
        <p className="text-white/80 text-sm">
          Осенняя библиотека © 2025 • Все права на книги принадлежат их авторам
        </p>
        <p className="text-orange-300/70 text-xs mt-3">
          Сделано с душой на React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}