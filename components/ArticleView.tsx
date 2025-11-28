
import React from 'react';
import { Article } from '../types';
import { ArrowLeft, Calendar, Share2, Globe } from 'lucide-react';
import { getAuthor } from '../authors';
import { INITIAL_ARTICLES } from '../articles';
import ArticleCard from './ArticleCard';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onAuthorClick: (author: string) => void;
  onReadArticle: (article: Article) => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onAuthorClick, onReadArticle }) => {
  // Robust split to handle newlines with potential indentation/whitespace
  const paragraphs = article.content.split(/\n\s*\n/);
  const author = getAuthor(article.author);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Gaming': return 'bg-purple-600 shadow-[0_0_10px_#9333ea]';
      case 'AI': return 'bg-neon-cyan text-black shadow-[0_0_10px_#00f3ff]';
      case 'Drones': return 'bg-orange-500 shadow-[0_0_10px_#f97316]';
      case 'Gadgets': return 'bg-blue-500 shadow-[0_0_10px_#3b82f6]';
      case 'Mobile': return 'bg-green-500 shadow-[0_0_10px_#22c55e]';
      case 'Spotlight': return 'bg-neon-pink shadow-[0_0_10px_#ff00ff]';
      default: return 'bg-white/20 text-white border border-white/30';
    }
  };

  // Logic to find related articles based on category overlap
  const relatedArticles = INITIAL_ARTICLES
    .filter(a => a.id !== article.id) // Exclude current article
    .map(a => ({
      article: a,
      // Score based on how many categories match
      score: a.category.filter(cat => article.category.includes(cat)).length
    }))
    .sort((a, b) => b.score - a.score) // Sort by highest score
    .slice(0, 3) // Take top 3
    .map(item => item.article);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
      >
        <ArrowLeft size={20} /> Back to Feed
      </button>

      <article className="bg-tech-slate/40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        {/* Header Image */}
        <div className="relative h-[400px] w-full">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-slate to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8 w-full">
             <div className="flex flex-wrap items-center gap-3 mb-4">
                {article.category.map((cat, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider uppercase ${getCategoryColor(cat)}`}>
                    {cat}
                  </span>
                ))}

                {article.isGenerated && (
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 text-xs font-bold">
                    AI Generated
                  </span>
                )}
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight brand-font drop-shadow-lg">
               {article.title}
             </h1>
             <div className="flex items-center gap-6 text-gray-300 text-sm">
               <button
                  onClick={() => onAuthorClick(article.author)}
                  className="flex items-center gap-3 group hover:text-neon-cyan transition-colors"
               >
                  <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full border border-neon-cyan object-cover" />
                  <span className="underline decoration-transparent group-hover:decoration-neon-cyan transition-all underline-offset-4 font-medium">
                    {article.author}
                  </span>
               </button>
               <span className="flex items-center gap-2"><Calendar size={16} className="text-neon-pink"/> {article.date}</span>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-gray-200 font-light mb-8 italic border-l-4 border-neon-cyan pl-4">
              {article.summary}
            </p>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              {paragraphs.map((para, index) => {
                // Split the paragraph by image markdown, keeping the delimiter so we can process parts
                // Regex matches ![alt](url)
                const parts = para.split(/(!\[.*?\]\(.*?\))/g);

                return (
                  <React.Fragment key={index}>
                    {parts.map((part, partIndex) => {
                       if (!part.trim()) return null;

                       // Check if this part is an image tag
                       const imgMatch = part.match(/!\[(.*?)\]\((.*?)\)/);

                       if (imgMatch) {
                           const [_, alt, src] = imgMatch;
                           return (
                             <figure key={`${index}-${partIndex}`} className="my-8">
                               <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                                <img
                                  src={src}
                                  alt={alt}
                                  className="w-full h-auto object-cover max-h-[500px]"
                                />
                               </div>
                               {alt && <figcaption className="mt-3 text-center text-sm text-neon-cyan/80 font-medium tracking-wide">{alt}</figcaption>}
                             </figure>
                           );
                       }

                       // Check if it's a Header (starts with #)
                       const isHeader = part.trim().startsWith('#');
                       const cleanText = part.replace(/#/g, '').trim();

                       if (isHeader) {
                         return (
                           <h3 key={`${index}-${partIndex}`} className="text-2xl font-bold text-white mt-8 mb-4 brand-font border-b border-white/10 pb-2">
                             {cleanText}
                           </h3>
                         );
                       }

                       return <p key={`${index}-${partIndex}`}>{cleanText}</p>;
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Sources Section if Available */}
          {article.sourceUrls && article.sourceUrls.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold text-neon-cyan mb-4 flex items-center gap-2">
                <Globe size={18} /> Grounded Sources
              </h3>
              <ul className="space-y-2">
                {article.sourceUrls.map((url, idx) => (
                  <li key={idx}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-neon-pink transition-colors truncate block"
                    >
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-white/10">
             <div className="text-gray-500 text-sm">
               Categories: <span className="text-gray-300">{article.category.join(', ')}</span>
             </div>
             <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
               <Share2 size={18} /> Share Spotlight
             </button>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="mt-16 pt-12 border-t border-white/10">
           <h2 className="text-3xl font-bold text-white mb-8 brand-font flex items-center gap-2">
             Related Stories
             <span className="h-2 w-2 rounded-full bg-neon-cyan inline-block ml-2 animate-pulse"></span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {relatedArticles.map((related) => (
               <ArticleCard
                 key={related.id}
                 article={related}
                 onClick={onReadArticle}
                 onAuthorClick={onAuthorClick}
               />
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default ArticleView;
