import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import Wallet from './components/Wallet';
import Stats from './components/Stats';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
`;

const Sidebar = styled.aside`
  width: 300px;
  padding: 20px;
  background-color: #2a2a2a;
  border-radius: 8px;
  margin-right: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <MainContent>
          <Canvas />
          <Sidebar>
            <Wallet />
            <Toolbar />
            <Stats />
          </Sidebar>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App; 