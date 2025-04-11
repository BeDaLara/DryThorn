import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtistCarousel.css';

const artists = [
  {
    id: 1,
    name: "Artista 1",
    specialty: "Black & Grey",
    image: "/artist1.jpg"
  },
  {
    id: 2,
    name: "Artista 2",
    specialty: "Traditional",
    image: "/artist2.jpg"
  },
  {
    id: 3,
    name: "Artista 3",
    specialty: "Realismo",
    image: "/artist3.jpg"
  },
  {
    id: 4,
    name: "Artista 4",
    specialty: "Geométrico",
    image: "/artist4.jpg"
  },
  {
    id: 5,
    name: "Artista 5",
    specialty: "Aquarela",
    image: "/artist5.jpg"
  }
];

const ArtistCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= artists.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artists.length - 3 : prevIndex - 1
    );
  };

  const visibleArtists = artists.slice(currentIndex, currentIndex + 3);

  return (
    <section className="artist-carousel">
      <div className="container">
        <h2>Nossos Artistas</h2>
        <div className="carousel-wrapper">
          <button onClick={prevSlide} className="carousel-btn prev">
            <span className="arrow">&#10094;</span>
          </button>
          
          <div className="carousel-container">
            <div className="artists-grid">
              {visibleArtists.map((artist) => (
                <div key={artist.id} className="artist-card">
                  <Link to={`/artists/${artist.id}`}>
                    <div className="artist-image-container">
                      <img src={artist.image} alt={artist.name} />
                      <div className="artist-overlay">
                        <span>Ver Portfólio</span>
                      </div>
                    </div>
                    <div className="artist-info">
                      <h3>{artist.name}</h3>
                      <p className="specialty">{artist.specialty}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={nextSlide} className="carousel-btn next">
            <span className="arrow">&#10095;</span>
          </button>
        </div>
        
        <div className="carousel-dots">
          {Array.from({ length: artists.length - 2 }).map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistCarousel;