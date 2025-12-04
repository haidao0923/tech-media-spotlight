import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import ArticleCard from './ArticleCard';
import { Article } from '../types';
import { INITIAL_ARTICLES } from '../articles';
import { Search } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface HomeContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Home: React.FC = () => {
  const { searchQuery, setSearchQuery } = useOutletContext<HomeContextType>();
  const [articles] = useState<Article[]>(INITIAL_ARTICLES);
  const [featuredArticle, setFeaturedArticle] = useState<Article>(INITIAL_ARTICLES[0]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    // Update document title for SEO
    document.title = "Tech Media Spotlight | Gadgets & Good Times";
  }, []);

  // Calculate unique categories from all articles
  const uniqueCategories = Array.from(new Set(articles.flatMap(article => article.category)));
  const allCategories = [
    ...(uniqueCategories.includes('Spotlight') ? ['Spotlight'] : []),
    ...uniqueCategories.filter(c => c !== 'Spotlight').sort()
  ];

  useEffect(() => {
    const reversedArticles = [...articles].reverse();
    const spotlight = reversedArticles.find(a => a.category.includes('Spotlight')) || reversedArticles[0];
    setFeaturedArticle(spotlight);
  }, [articles]);

  // Filter articles
  const filteredArticles = [...articles].reverse().filter(article => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.category.some(cat => cat.toLowerCase().includes(query));

    const matchesCategory = activeCategory === null || article.category.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Show Hero only when NOT searching */}
      {!searchQuery && (
        <Hero article={featuredArticle} />
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 ${searchQuery ? 'mt-12' : '-mt-20'}`}>
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-6">

          {/* Left Side: Title and Search */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <h2 className="text-3xl font-bold text-white brand-font flex items-center gap-3 whitespace-nowrap">
              {searchQuery ? 'Search Results' : 'Fresh Drops'}
              {!searchQuery && (
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                </span>
              )}
            </h2>

            {/* Search Bar */}
            <div className="relative group w-full md:w-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="bg-tech-surface/50 border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-full md:w-64 focus:w-full md:focus:w-80 transition-all duration-300 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan placeholder-gray-500 shadow-inner"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-neon-cyan transition-colors" />
            </div>
          </div>

          {/* Category Filters */}
          {!searchQuery && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-transparent ${
                  activeCategory === null
                    ? 'bg-neon-cyan text-black shadow-[0_0_10px_rgba(0,243,255,0.5)] border-neon-cyan'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                All
              </button>
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-transparent ${
                    activeCategory === cat
                      ? 'bg-neon-pink text-white shadow-[0_0_10px_rgba(255,0,255,0.5)] border-neon-pink'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No matches found</h3>
            <p className="text-gray-400">
              {activeCategory
                ? `No articles found in "${activeCategory}". Try a different category.`
                : 'Try searching for a different keyword like "AI", "Drones", or "Gaming".'}
            </p>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-4 text-neon-cyan hover:underline text-sm font-bold uppercase tracking-wide"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;