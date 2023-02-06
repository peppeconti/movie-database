import React from 'react';
import './App.css';
import Search from './components/Search';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faTimes);

function App() {

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
