import { motion } from 'framer-motion';
import { ArrowLeft, Star, Calendar, BookOpen } from 'lucide-react';

const FALLBACK_COVER = '/covers/книжечки.jpg';

export default function BookDetail({ book, onBack }) {
  const coverUrl = book.cover ? `/covers/${book.cover}` : FALLBACK_COVER;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen relative overflow-hidden">
      {}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 -z-10"
        style={{ backgroundImage: `url('${coverUrl}')` }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/30 transition-all shadow-2xl"
      >
        <ArrowLeft className="w-6 h-6" /> Назад
      </button>

      <div className="relative z-10 max-w-6xl mx-auto p-8 md:p-16 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={coverUrl}
            alt={book.title}
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl border-8 border-white/20"
            onError={(e) => e.target.src = FALLBACK_COVER}
          />

          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">{book.title}</h1>
            <p className="text-3xl text-orange-200">{book.author}</p>
            <div className="flex flex-wrap gap-8 text-xl">
              <div className="flex items-center gap-3"><Calendar className="w-7 h-7 text-orange-300" /> {book.year}</div>
              <div className="flex items-center gap-3"><Star className="w-7 h-7 fill-yellow-400 text-yellow-400" /> {book.rating}/5.0</div>
              <div className="flex items-center gap-3"><BookOpen className="w-7 h-7 text-orange-300" /> {book.pages} стр.</div>
            </div>
            <span className="inline-block px-8 py-4 bg-white/20 backdrop-blur rounded-full text-xl font-medium">
              {book.genre}
            </span>
            <p className="text-lg leading-relaxed text-gray-100 max-w-2xl">{book.description}</p>
            <p className="text-sm opacity-70">ISBN: {book.isbn}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}