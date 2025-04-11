import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ModalPromo from './components/ModalPromo/ModalPromo';
import './components/Navbar/Navbar.css';
import './components/Footer/Footer.css';
import './components/ArtistCarousel/ArtistCarousel.css';

function App() {
  return (
    <Router>
      <ModalPromo />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;