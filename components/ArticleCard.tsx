
import React from 'react';
import { Article } from '../types';
import { ExternalLink } from 'lucide-react';
import { getAuthor } from '../authors';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
  onAuthorClick: (author: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick, onAuthorClick }) => {
  const author = getAuthor(article.author);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Gaming': return 'bg-purple-600 text-white';
      case 'AI': return 'bg-neon-cyan/90 text-black';
      case 'Drones': return 'bg-orange-500 text-white';
      case 'Gadgets': return 'bg-blue-500 text-white';
      case 'Mobile': return 'bg-green-500 text-white';
      case 'Spotlight': return 'bg-neon-pink/90 text-white';
      case 'CES 2025': return 'bg-white text-black';
      default: return 'bg-tech-surface border border-white/20 text-gray-300';
    }
  };

  return (
    <div 
      onClick={() => onClick(article)}
      className="group relative flex flex-col bg-tech-surface/50 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,243,255,0.15)] cursor-pointer h-full"
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent opacity-60"></div>
        
        {/* Categories Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
          {article.category.slice(0, 3).map((cat, index) => (
            <span key={index} className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md ${getCategoryColor(cat)}`}>
              {cat}
            </span>
          ))}
          {article.category.length > 3 && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-black/50 text-white backdrop-blur-md">
              +{article.category.length - 3}
            </span>
          )}
        </div>

        {article.isGenerated && (
           <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold bg-black/80 text-neon-cyan border border-neon-cyan/30 backdrop-blur-sm">
              <ExternalLink size={10} /> AI
            </span>
           </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-neon-cyan transition-colors line-clamp-2 brand-font">
          {article.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
          {article.summary}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <img src={author.avatar} className="w-6 h-6 rounded-full bg-white/10 object-cover" alt={author.name}/>
            <span 
              onClick={(e) => {
                e.stopPropagation();
                onAuthorClick(article.author);
              }}
              className="text-xs text-gray-300 font-medium hover:text-neon-cyan cursor-pointer transition-colors relative z-10"
            >
              {article.author}
            </span>
          </div>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
      </div>
      
      {/* Hover overlay flash */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default ArticleCard;
