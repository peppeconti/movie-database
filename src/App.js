import './App.css';
import React from 'react';
import SearchForm from './components/SearchForm';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loader from './components/Loader';

library.add(faSearch, faTimes);

function App() {

  return (
    <div className="App">
      <SearchForm />
    </div>
  );
}

export default App;
