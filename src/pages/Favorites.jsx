import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorites Yet</h2>
          <p>Add some movies to your favorites!</p>
        </div>
      ) : (
        <div className="favorites-list"> {/* Use the new class */}
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
