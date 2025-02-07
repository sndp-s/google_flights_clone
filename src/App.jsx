import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<ResultsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
