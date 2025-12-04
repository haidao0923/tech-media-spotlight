
import React, { useState } from 'react';
import Header from './components/Header';
import ArticleView from './components/ArticleView';
import AuthorProfile from './components/AuthorProfile';
import Contact from './components/Contact';
import Home from './components/Home';
import { Routes, Route, Outlet } from 'react-router-dom';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-deep-space text-white font-sans selection:bg-neon-pink selection:text-white pb-20">
      <Header/>

      <main>
        <Routes>
          <Route path="/" element={<Outlet context={{ searchQuery, setSearchQuery }} />}>
             <Route index element={<Home />} />
          </Route>
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/author/:name" element={<AuthorProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
