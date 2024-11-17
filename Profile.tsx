import React, { useState } from 'react';
import { useAccount } from 'wagmi';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [name, setName] = useState<string>('');
  const { address } = useAccount();

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Wallet Address
            </label>
            <input
              type="text"
              value={address || ''}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 