import { BookOpen, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#3b2f2f]/80 via-[#4a342e]/70 to-[#5c4033]/80
">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Логотип + название */}
      <div className="p-3 bg-amber-700/20 rounded-2xl backdrop-blur border border-amber-400/30">
  <BookOpen className="w-8 h-8 text-amber-300" />
</div>

      <h1 className="text-2xl md:text-3xl font-bold text-amber-100 drop-shadow-lg">
  Осенняя библиотека
</h1>

<p className="text-sm text-amber-300/80">
  Тёплые книги для холодных вечеров
</p>

        {/* Декоративная иконка поиска (можно сделать рабочий поиск позже) */}
        {/* <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-white/10 rounded-2xl border border-white/20">
          <Search className="w-5 h-5 text-orange-200" />
          <span className="text-orange-200 text-sm">Поиск...</span>
        </div> */}
      </div>
    </header>
  );
}