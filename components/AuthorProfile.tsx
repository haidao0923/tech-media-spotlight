
import React from 'react';
import { Article } from '../types';
import ArticleCard from './ArticleCard';
import { User, ArrowLeft } from 'lucide-react';
import { getAuthor } from '../authors';

interface AuthorProfileProps {
  authorName: string;
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onBack: () => void;
  onAuthorClick: (author: string) => void;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ authorName, articles, onReadArticle, onBack, onAuthorClick }) => {
  const authorArticles = articles.filter(a => a.author === authorName).reverse();
  const author = getAuthor(authorName);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <button
        onClick={onBack}
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

      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white brand-font">
          Latest from {authorName.split(' ')[0]}
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-pink/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authorArticles.map(article => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={onReadArticle}
            onAuthorClick={onAuthorClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorProfile;
