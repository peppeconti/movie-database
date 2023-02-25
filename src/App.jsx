import Home from './components/Home/Home';
import Query from './components/Query/Query';
import { Route, Routes } from 'react-router-dom';

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
