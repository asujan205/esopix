import React, { useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';

const WalletContainer = styled.div`
  margin-bottom: 20px;
`;

const WalletInfo = styled.div`
  background-color: #3a3a3a;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #5a5a5a;
  }
`;

const Wallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState('0');
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        
        setAccount(address);
        setBalance(ethers.utils.formatEther(balance));
        setConnected(true);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <WalletContainer>
      {!connected ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : (
        <WalletInfo>
          <h3>Wallet Connected</h3>
          <p>Address: {account?.slice(0, 6)}...{account?.slice(-4)}</p>
          <p>Balance: {balance} ETH</p>
        </WalletInfo>
      )}
    </WalletContainer>
  );
};

export default Wallet; 