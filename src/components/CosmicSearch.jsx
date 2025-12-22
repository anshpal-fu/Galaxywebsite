import React, { useState } from 'react';

const CosmicSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const suggestions = [
    "Creative vision exercises",
    "Mindfulness techniques",
    "Business growth strategies",
    "Venus wisdom quotes",
    "Cosmic inspiration",
    "Personal development plans"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className={`relative rounded-xl glass-effect transition-all duration-300 ${
          isFocused ? 'ring-2 ring-accent-500/50 shadow-lg' : ''
        }`}>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search the cosmic universe..."
            className="w-full pl-12 pr-4 py-4 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <div className="flex space-x-2">
              <button 
                type="button"
                className="p-1 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button 
                type="submit"
                className="p-1 rounded-lg bg-accent-500/20 text-accent-300 hover:bg-accent-500/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* AI Suggestions */}
      {isFocused && query.length > 0 && (
        <div className="absolute z-10 w-full mt-2 rounded-xl glass-effect shadow-lg overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center text-sm text-accent-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI-powered suggestions
            </div>
          </div>
          <div className="py-2">
            {suggestions
              .filter(suggestion => 
                suggestion.toLowerCase().includes(query.toLowerCase())
              )
              .slice(0, 4)
              .map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setQuery(suggestion);
                    if (onSearch) {
                      onSearch(suggestion);
                    }
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:bg-white/5 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {suggestion}
                </button>
              ))
            }
          </div>
        </div>
      )}

      {/* Quick Search Tags */}
      {!isFocused && !query && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {suggestions.slice(0, 4).map((tag, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(tag);
                if (onSearch) {
                  onSearch(tag);
                }
              }}
              className="px-3 py-1.5 text-sm rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CosmicSearch;