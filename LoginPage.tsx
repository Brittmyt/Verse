import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useConnect } from 'wagmi';
import { metaMask } from '@wagmi/connectors'

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { connect } = useConnect();

  const handleConnect = async () => {
    try {
      await connect({ connector: metaMask() });
      navigate('/profile');
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <button
          onClick={handleConnect}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default LoginPage;