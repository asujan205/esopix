import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  background-color: #3a3a3a;
  padding: 15px;
  border-radius: 8px;
`;

const StatItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #4a4a4a;
  border-radius: 4px;
`;

const Stats = () => {
  return (
    <StatsContainer>
      <h3>Game Statistics</h3>
      
      <StatItem>
        <h4>Total Pixels</h4>
        <p>0 / 150,000</p>
      </StatItem>
      
      <StatItem>
        <h4>Your Pixels</h4>
        <p>0</p>
      </StatItem>
      
      <StatItem>
        <h4>Account Balance</h4>
        <p>0 ETH</p>
      </StatItem>
      
      <StatItem>
        <h4>Patron Bonus</h4>
        <p>0 ETH</p>
      </StatItem>
      
      <StatItem>
        <h4>Pot Size</h4>
        <p>0 ETH</p>
      </StatItem>
      
      <StatItem>
        <h4>Referral Earnings</h4>
        <p>0 ETH</p>
      </StatItem>
    </StatsContainer>
  );
};

export default Stats; 