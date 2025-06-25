import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigate';
import { fetchSpotifyAlbums } from './api';
import MusicCatalog from './MusicCatalog'; 
import './styles.css'; 

const Index = () => {
  const [musicCatalog, setMusicCatalog] = useState({ albums: [], singles: [], eps: [], features: [] });
  
  useEffect(() => {
    const loadSpotifyAlbums = async () => {
      try {
        const albums = await fetchSpotifyAlbums();
        const formattedAlbums = albums.map(album => ({
          id: album.id,
          title: album.name,
          type: 'Album',
          year: new Date(album.release_date).getFullYear(),
          cover: album.images[0]?.url || 'default-cover.jpg',
          tracks: album.total_tracks,
          streams: 'N/A', 
          platforms: {
            spotify: album.external_urls.spotify,
            apple: 'https://music.apple.com',
            youtube: 'https://youtube.com'
          }
        }));
        setMusicCatalog(prev => ({ ...prev, albums: formattedAlbums }));
      } catch (error) {
        console.error('Error fetching Spotify albums:', error);
      }
    };

    loadSpotifyAlbums();
  }, []);

  const handlePlay = (item) => {
    console.log('Playing:', item.title);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <Navigation />
        <Routes>
          <Route path="/albums" element={
            <MusicCatalog items={musicCatalog.albums} title="Albums" onPlay={handlePlay} />
          } />
          <Route path="/" element={
            <h1 className="text-6xl text-white">Welcome to Lil Tecca's Catalog</h1>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default Index;