import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { MovieModel } from "../models/Movie";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites)
    return (
      <div className='favorites'>
        <h2>Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie: MovieModel) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    );

  return (
    <>
      <div className="favorites-empty">
        <h2>No favorites</h2>
        <p>Find some favorites to add</p>
      </div>
    </>
  );
}
export default Favorite;
