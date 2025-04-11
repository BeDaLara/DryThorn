import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Localização</h3>
          <p>Rua do Tatuador, 123</p>
          <p>Bairro Velho Oeste</p>
          <p>Sua Cidade - SC</p>
        </div>
        
        <div className="footer-section">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 10h - 19h</p>
          <p>Sábado: 10h - 18h</p>
          <p>Domingo: Fechado</p>
        </div>
        
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/logo-drythorn.png" alt="Drythorn Tattoo Studio" />
          </Link>
          <p>© {new Date().getFullYear()} Drythorn Tattoo Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;