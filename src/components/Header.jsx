import { BookOpen, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-40 border-b border-white/20 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Логотип + название */}
        <div className="flex items-center gap-8 gap-4">
          <div className="p-3 bg-orange-600/30 rounded-2xl backdrop-blur border border-orange-400/30">
            <BookOpen className="w-8 h-8 text-orange-300" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Осенняя библиотека
            </h1>
            <p className="text-sm text-orange-200 opacity-90">Тёплые книги для холодных вечеров</p>
          </div>
        </div>

        {/* Декоративная иконка поиска (можно сделать рабочий поиск позже) */}
        <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-white/10 rounded-2xl border border-white/20">
          <Search className="w-5 h-5 text-orange-200" />
          <span className="text-orange-200 text-sm">Поиск...</span>
        </div>
      </div>
    </header>
  );
}