import React from 'react';
import MusicCard from './MusicCard';

const MusicCatalog = ({ items, title, onPlay }) => (
  <div>
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MusicCard key={item.id} item={item} onPlay={onPlay} />
      ))}
    </div>
  </div>
);

export default MusicCatalog;
