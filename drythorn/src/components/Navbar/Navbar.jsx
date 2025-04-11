import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-drythorn.png" alt="Drythorn Tattoo Studio" />
        </Link>
        
        <div className={`navbar-links ${menuOpen ? 'active' : ''} ${scrolled ? 'visible' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/artists" onClick={() => setMenuOpen(false)}>Artistas</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Galeria</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
          <Link to="/booking" className="booking-btn" onClick={() => setMenuOpen(false)}>Agendar</Link>
        </div>
        
        <button 
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;