import React from 'react';
import './App.css';
import PixabaySearch from './PixabaySearch';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Moteur de recherche d'images</h1>
      <PixabaySearch />
    </div>
  );
}

export default App;
