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
];

const ArtistCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === artists.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artists.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="artist-carousel">
      <div className="container">
        <h2>Nossos Artistas</h2>
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-btn prev">&#10094;</button>
          
          <div className="carousel-track">
            {artists.map((artist, index) => (
              <div 
                key={artist.id}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <Link to={`/artists/${artist.id}`} className="artist-card">
                  <img src={artist.image} alt={artist.name} />
                  <div className="artist-info">
                    <h3>{artist.name}</h3>
                    <p>{artist.specialty}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <button onClick={nextSlide} className="carousel-btn next">&#10095;</button>
        </div>
        
        <div className="carousel-dots">
          {artists.map((_, index) => (
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