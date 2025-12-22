import React, { useState } from 'react';

const CosmicGallery = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const openItem = (item) => {
    setSelectedItem(item);
  };

  const closeItem = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full">
      {/* View Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold gradient-text">
          Cosmic Collection
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-accent-500/20 text-accent-300' : 'text-gray-400 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-accent-500/20 text-accent-300' : 'text-gray-400 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
        : "space-y-3"
      }>
        {items.map((item, index) => (
          <div 
            key={index}
            onClick={() => openItem(item)}
            className={`group cursor-pointer rounded-xl overflow-hidden glass-effect card-hover ${
              viewMode === 'list' ? 'flex items-center p-4' : ''
            }`}
          >
            {viewMode === 'grid' ? (
              <>
                <div className="aspect-square bg-gradient-to-br from-accent-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center overflow-hidden">
                  {item.type === 'image' ? (
                    <div className="w-full h-full bg-gradient-to-br from-accent-500/50 to-secondary-500/50"></div>
                  ) : (
                    <span className="text-3xl">♀</span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-white truncate">{item.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{item.category}</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-500/30 to-secondary-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                  {item.type === 'image' ? (
                    <div className="w-full h-full bg-gradient-to-br from-accent-500/50 to-secondary-500/50"></div>
                  ) : (
                    <span className="text-xl">♀</span>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {item.date}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl glass-effect">
            <button 
              onClick={closeItem}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 aspect-square bg-gradient-to-br from-accent-500/30 to-secondary-500/30 rounded-xl flex items-center justify-center">
                  {selectedItem.type === 'image' ? (
                    <div className="w-full h-full bg-gradient-to-br from-accent-500/50 to-secondary-500/50 rounded-xl"></div>
                  ) : (
                    <span className="text-6xl">♀</span>
                  )}
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold gradient-text mb-4">
                    {selectedItem.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-sm">
                      {selectedItem.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-sm">
                      {selectedItem.date}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {selectedItem.description || 'This cosmic element represents a key aspect of your Venus-inspired journey. Each item in your collection holds special significance in your creative and personal growth.'}
                  </p>
                  <div className="flex space-x-3">
                    <button className="btn-primary">
                      Add to Cluster
                    </button>
                    <button className="btn-outline">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CosmicGallery;