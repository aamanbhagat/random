'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    // Fetch links from the public file
    fetch('/links.txt')
      .then(response => response.text())
      .then(text => {
        const urls = text.split('\n').filter(url => url.trim() !== '');
        setLinks(urls);
      })
      .catch(error => console.error('Error loading links:', error));
  }, []);

  const handleRandomRedirect = () => {
    if (links.length > 0) {
      const randomIndex = Math.floor(Math.random() * links.length);
      const randomUrl = links[randomIndex];
      window.location.href = randomUrl;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <button
        onClick={handleRandomRedirect}
        className="group relative px-12 py-5 bg-white text-black font-medium text-xl rounded-2xl hover:bg-gray-50 active:scale-95 transition-all duration-150 ease-out focus:outline-none focus:ring-4 focus:ring-white/20 shadow-2xl hover:shadow-white/10 border-0 cursor-pointer select-none"
        disabled={links.length === 0}
      >
        <span className="relative z-10 tracking-wide">
          {links.length === 0 ? 'Loading...' : 'Random Link'}
        </span>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      </button>
    </div>
  );
}