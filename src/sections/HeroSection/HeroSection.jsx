import Button from "../../components/Button/Button";
import "./HeroSection.css";
import { useEffect, useState } from "react";
import { useMovies } from "../../Hooks/useMovies";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`body-container ${visible ? "show" : ""}`}>
      <HeroCTA />
      <MovieCarousel />
    </div>
  );
}
function HeroCTA() {
  return (
    <>
      <p className="movie-description">
        Discover movies you'll actually enjoy, Get personalized recommendations
        based on what you like or what's trending....
      </p>
      <Button padding="1rem 2rem">Discover!</Button>
    </>
  );
}

function MovieCarousel() {
  const { movies, loading, error } = useMovies();

  console.log("Movies in MovieCarousel:", movies);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies: {error.message}</p>;
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  const movieList = [...movies, ...movies];

  return (
    <div className="carousel-Wrapper">
      <div className="carousel-track">
        {movieList.map((movie, i) => (
          <img
            key={movie.id + "-" + i}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="carousel-item"
          />
        ))}
      </div>
    </div>
  );
}
