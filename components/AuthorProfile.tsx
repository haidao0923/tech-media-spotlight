
import React, { useEffect, useState, useRef } from 'react';
import ArticleCard from './ArticleCard';
import { User, ArrowLeft, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAuthor } from '../authors';
import { useParams, useNavigate } from 'react-router-dom';
import { INITIAL_ARTICLES } from '../articles';

const ITEMS_PER_PAGE = 6;

const AuthorProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const authorName = decodeURIComponent(name || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update SEO title
  useEffect(() => {
    if (authorName) {
      document.title = `${authorName} | Author Profile`;
      window.scrollTo(0, 0);
    }
  }, [authorName]);

  const authorArticles = INITIAL_ARTICLES.filter(a => a.author === authorName).reverse();
  const author = getAuthor(authorName);

  // Filter articles based on search query
  const filteredArticles = authorArticles.filter(article => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.category.some(cat => cat.toLowerCase().includes(query))
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
      >
        <ArrowLeft size={20} /> Back to Feed
      </button>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-tech-surface/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="relative group">
             <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full group-hover:bg-neon-cyan/30 transition-colors duration-500"></div>
             <img
                src={author.avatar}
                alt={authorName}
                className="relative w-32 h-32 rounded-full border-4 border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)] bg-tech-slate z-10 object-cover"
             />
             <div className="absolute bottom-0 right-0 bg-neon-pink p-2 rounded-full text-white border-4 border-deep-space z-20">
                <User size={20} />
             </div>
        </div>
        <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-2 brand-font tracking-wide">{authorName}</h1>
            <h2 className="text-neon-pink font-bold uppercase tracking-wider text-sm mb-4">{author.role}</h2>
            <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                {author.bio}
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center md:items-start">
                    <span className="block text-2xl font-bold text-neon-cyan">{authorArticles.length}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Articles Published</span>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-2xl font-bold text-white brand-font whitespace-nowrap">
          Latest from {authorName.split(' ')[0]}
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative group w-full md:w-auto">
            <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={`Search ${authorName.split(' ')[0]}'s articles...`}
            className="bg-tech-surface/50 border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-full md:w-64 focus:w-full md:focus:w-80 transition-all duration-300 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan placeholder-gray-500 shadow-inner"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-neon-cyan transition-colors" />
        </div>
      </div>

      <div ref={containerRef} className="scroll-mt-32">
        {filteredArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-3 rounded-full bg-white/5 text-white hover:bg-neon-cyan hover:text-black disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white transition-all disabled:cursor-not-allowed border border-white/10"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-full text-sm font-bold transition-all border ${
                                currentPage === page
                                ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.5)]'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-full bg-white/5 text-white hover:bg-neon-cyan hover:text-black disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white transition-all disabled:cursor-not-allowed border border-white/10"
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No matches found</h3>
            <p className="text-gray-400">
              Try searching for a different keyword in {authorName}'s articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorProfile;
