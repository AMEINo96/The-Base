import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CipherPortfolio from './pages/CipherPortfolio';
import ArchivistPortfolio from './pages/ArchivistPortfolio';
import ProjectPortfolio from './pages/ProjectPortfolio';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/cipher" element={<CipherPortfolio />} />
        <Route path="/portfolio/archivist" element={<ArchivistPortfolio />} />
        <Route path="/portfolio/project/:id" element={<ProjectPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
