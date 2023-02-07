import Home from './components/Home/Home';
import Query from './components/Query/Query';
import { Route, Routes } from 'react-router-dom';
// IMPORT FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/query' element={<Query />} />
      </Routes>
    </>
  );
}

export default App;
