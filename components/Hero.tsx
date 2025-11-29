
import React from 'react';
import { Article } from '../types';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { getAuthor } from '../authors';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  article: Article;
}

const Hero: React.FC<HeroProps> = ({ article }) => {
  const author = getAuthor(article.author);
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-deep-space pt-16 pb-24 sm:pb-32">

      {/* Spotlight Beam Effect */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/20 via-neon-cyan/5 to-transparent transform -rotate-12 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/20 via-neon-pink/5 to-transparent transform rotate-12 blur-3xl"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-full bg-gradient-to-b from-white/10 via-transparent to-transparent blur-2xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-bold tracking-wider mb-8 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <Sparkles size={16} className="animate-pulse" />
              <span>FEATURED STORY</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] brand-font italic">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{article.title.split(':')[0]}</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold text-neon-pink normal-case tracking-normal font-sans">
                {article.title.split(':')[1] || article.summary.slice(0, 40) + '...'}
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {article.summary}
            </p>

            <button
              onClick={() => navigate(`/article/${article.id}`)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black italic tracking-wider text-lg skew-x-[-10deg] hover:bg-neon-cyan transition-colors duration-300 shadow-[4px_4px_0px_#ff00ff] hover:shadow-[6px_6px_0px_#ff00ff] hover:-translate-y-1"
            >
              <span className="skew-x-[10deg]">READ STORY</span>
              <ArrowRight className="w-5 h-5 skew-x-[10deg] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image/Graphic Content */}
          <div className="lg:w-1/2 w-full relative animate-float">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-tech-slate group">
              {/* Image */}
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/90 via-transparent to-transparent"></div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg">
                 <Zap className="text-neon-cyan w-6 h-6" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-3 text-sm font-medium text-white">
                    <img src={author.avatar} alt={article.author} className="w-8 h-8 rounded-full border border-neon-pink object-cover" />
                    <span>By {article.author}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-neon-pink">{article.date}</span>
                 </div>
              </div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-pink/30 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-cyan/30 rounded-full blur-xl -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
