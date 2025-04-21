import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1 className="font-bold text-xl">⚰️ CodeGrave</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/submit">Submit Grave</Link>
      </div>
    </nav>
  );
}
export default Navbar;