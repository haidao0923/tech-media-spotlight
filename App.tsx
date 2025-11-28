
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import AuthorProfile from './components/AuthorProfile';
import Contact from './components/Contact';
import { Article, ViewMode } from './types';
import { INITIAL_ARTICLES } from './articles';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>('home');
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [featuredArticle, setFeaturedArticle] = useState<Article>(INITIAL_ARTICLES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Calculate unique categories from all articles
  const allCategories = Array.from(new Set(articles.flatMap(article => article.category))).sort();

  useEffect(() => {
    // Find the latest article (searching from the end) that has 'Spotlight' in its categories
    // If none found, use the very last article in the list (newest)
    const reversedArticles = [...articles].reverse();
    const spotlight = reversedArticles.find(a => a.category.includes('Spotlight')) || reversedArticles[0];
    setFeaturedArticle(spotlight);
  }, [articles]);

  const handleNavigate = (newView: ViewMode) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleReadArticle = (article: Article) => {
    setSelectedArticle(article);
    handleNavigate('article');
  };

  const handleAuthorClick = (authorName: string) => {
    setSelectedAuthor(authorName);
    handleNavigate('author');
  };

  // Filter articles based on search query AND active category
  // We reverse the array here so that the last article in the config (newest) appears first in the grid
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
    <div className="min-h-screen bg-deep-space text-white font-sans selection:bg-neon-pink selection:text-white pb-20">
      <Header 
        onNavigate={handleNavigate} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAuthorClick={handleAuthorClick}
      />

      <main>
        {view === 'home' && (
          <>
            {/* Show Hero only when NOT searching */}
            {!searchQuery && (
              <Hero article={featuredArticle} onReadMore={handleReadArticle} />
            )}
            
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 ${searchQuery ? 'mt-12' : '-mt-20'}`}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white brand-font flex items-center gap-3">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Fresh Drops'}
                    {!searchQuery && (
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-neon-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                      </span>
                    )}
                  </h2>
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
                      onClick={handleReadArticle} 
                      onAuthorClick={handleAuthorClick}
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
        )}

        {view === 'article' && selectedArticle && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ArticleView 
              article={selectedArticle} 
              onBack={() => handleNavigate('home')} 
              onAuthorClick={handleAuthorClick}
            />
          </div>
        )}

        {view === 'author' && selectedAuthor && (
          <AuthorProfile 
            authorName={selectedAuthor}
            articles={articles}
            onReadArticle={handleReadArticle}
            onBack={() => handleNavigate('home')}
            onAuthorClick={handleAuthorClick}
          />
        )}

        {view === 'contact' && (
          <Contact onBack={() => handleNavigate('home')} />
        )}
      </main>

      <footer className="mt-20 border-t border-white/10 bg-black/40 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-black italic text-neon-cyan brand-font">TECH MEDIA</span>
                <span className="text-2xl font-black italic text-neon-pink brand-font">SPOTLIGHT</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Your source for the latest in gadgets, gaming, and future tech. 
              Curated by Hai Dao.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8 text-sm font-bold tracking-widest text-gray-500 uppercase">
            <span className="hover:text-neon-cyan cursor-pointer transition-colors">Gadgets</span>
            <span className="hover:text-neon-cyan cursor-pointer transition-colors">Gaming</span>
            <span className="hover:text-neon-pink cursor-pointer transition-colors">Future</span>
            <span className="hover:text-neon-pink cursor-pointer transition-colors">AI</span>
          </div>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Tech Media Spotlight.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
