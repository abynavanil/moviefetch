import "../css/MovieCard.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(MovieContext);

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-rating">Rating: {movie.vote_average}</p>
        <button
          className={`favorite-button ${isFavorite(movie.id) ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
