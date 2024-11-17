import { ethers } from 'ethers';
import EducationLedgerABI from './EducationLedger.json'; // ABI of your contract

const contractAddress = 'YOUR_CONTRACT_ADDRESS';

export const logExperience = async (title, description) => {
  if (!window.ethereum) throw new Error('No crypto wallet found');

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, EducationLedgerABI, signer);

  return await contract.logExperience(title, description);
};
