import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const FALLBACK_COVER = '/covers/книжечки.jpg'; // ← одна на весь проект

export default function BookCard({ book, onClick }) {
  const coverUrl = book.cover ? `/covers/${book.cover}` : FALLBACK_COVER;

  return (
    <motion.div
      whileHover={{ y: -16, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = FALLBACK_COVER;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1 line-clamp-2 leading-tight">
          {book.title}
        </h3>
        <p className="text-orange-200 text-sm mb-3 opacity-90">{book.author}</p>

        <div className="flex justify-between items-end">
          <span className="px-4 py-2 bg-white/25 backdrop-blur rounded-full text-xs font-medium">
            {book.genre}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow" />
            <span className="font-bold text-lg">{book.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}