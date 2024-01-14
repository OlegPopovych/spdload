import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { FavoritesPage } from './pages/FavoritesPage';
import { HomePage } from './pages/HomePage';
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorite' element={<FavoritesPage />} />
        </Routes>
      </main>

    </StyledApp>
  );
}

export default App;
