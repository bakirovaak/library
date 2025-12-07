import { useState, useEffect } from 'react';
import { books } from '../data/books';
import BookCard from './BookCard';
import BookDetail from './BookDetail';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Moon, Sun, Search } from 'lucide-react';
import Layout from "../components/Layout";

const BACKGROUND_IMAGE = '/covers/книжечки.jpg';

export default function BookLibrary() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все');

  useEffect(() => {
    darkMode 
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const genres = ['Все', ...new Set(books.map(b => b.genre))];
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                         book.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === 'Все' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  if (selectedBook) {
    return <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />;
  }

  return (
    <Layout>
      <div 
        className="min-h-screen relative overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-700/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-800/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              Библиотека 
            </h1>
            <p className="text-xl text-orange-100 drop-shadow-lg">Тёплые книги для холодных вечеров</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
            <div className="relative max-w-lg w-full">
              <Search className="absolute left-5 top-5 w-6 h-6 text-orange-200" />
              <input
                type="text"
                placeholder="Найти книгу или автора..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-16 pr-8 py-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all text-lg"
              />
            </div>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-8 py-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 text-white focus:outline-none focus:ring-4 focus:ring-orange-500/50"
            >
              {genres.map(g => (
                <option key={g} value={g} className="bg-orange-900/90">{g}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book, i) => (
              <div key={book.id} style={{ animationDelay: `${i * 100}ms` }} className="animate-fadeIn">
                <BookCard book={book} onClick={() => setSelectedBook(book)} />
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <p className="text-center text-orange-200 text-2xl mt-20">Ничего не найдено</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
