import Home from './components/Home/Home';
import ResultsPage from './components/ResultsPage/ResultsPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/query' element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;
