import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ArtistCarousel from '../../components/ArtistCarousel/ArtistCarousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      <main>
        {/* Banner Section */}
        <section className="banner">
        <div className="banner-image-container">
          <img 
            src="/public/img/banner.png" // Ou use "/images/banner/banner-home.jpg" se estiver em public/
            alt="Drythorn Tattoo Studio"
            className="banner-img"
          />
        </div>
        
      </section>
        
        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>Sobre Nós</h2>
                <p>
                  O Drythorn Tattoo Studio nasceu da paixão pela arte corporal e pelo estilo old school. 
                  Nossa equipe de artistas talentosos está comprometida em criar peças únicas que contam 
                  histórias e expressam personalidade.
                </p>
                <p>
                  Com anos de experiência no mercado, garantimos um ambiente seguro, limpo e profissional, 
                  onde a qualidade da arte e a satisfação do cliente são nossas prioridades.
                </p>
              </div>
              <div className="about-image">
                <img src="/studio-interior.jpg" alt="Interior do Drythorn Tattoo Studio" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <div className="services-content">
              <div className="services-image">
                <img src="/tattoo-process.jpg" alt="Processo de tatuagem" />
              </div>
              <div className="services-text">
                <h2>Nossos Serviços</h2>
                <ul>
                  <li>Tatuagens personalizadas</li>
                  <li>Cover-ups e retoques</li>
                  <li>Piercings profissionais</li>
                  <li>Venda de produtos para cuidados pós-tatuagem</li>
                  <li>Consultoria para projetos complexos</li>
                </ul>
                <Link to="/services" className="secondary-button">Saiba mais</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Artists Section */}
        <ArtistCarousel />
        
        {/* Booking Section */}
        <section className="booking-section">
          <div className="container">
            <div className="booking-content">
              <h2>Pronto para sua próxima tatuagem?</h2>
              <p>
                Agende uma consulta gratuita para discutir seu projeto com um de nossos artistas. 
                Nós ajudaremos a trazer sua visão à vida com segurança e excelência artística.
              </p>
              <Link to="/booking" className="cta-button">Agendar agora</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;