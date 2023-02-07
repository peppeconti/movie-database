import React from 'react';
import Home from './components/Home/Home';
import Query from './components/Query/Query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faTimes);

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Query />} />
      </Routes>
    </div>
  );
}

export default App;
