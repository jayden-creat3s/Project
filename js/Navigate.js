import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-4 p-4">
      <Link to="/albums" className="text-white">Albums</Link>
      <Link to="/singles" className="text-white">Singles</Link>
      <Link to="/eps" className="text-white">EPs</Link>
      <Link to="/features" className="text-white">Features</Link>
    </nav>
  );
};

export default Navigation;
