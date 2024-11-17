import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';

const Navigation: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <nav className="p-4 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Verse
        </Link>
        
        <div className="space-x-4">
          <Link to="/" className="px-4 py-2 hover:text-blue-600">
            Home
          </Link>
          {isConnected ? (
            <Link to="/profile" className="px-4 py-2 hover:text-blue-600">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="px-4 py-2 hover:text-blue-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 