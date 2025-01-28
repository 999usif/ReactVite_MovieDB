import { MovieModel } from "../models/Movie";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { SyntheticEvent } from "react";

type MovieProps = {
  movie: MovieModel;
};

function MovieCard({ movie }: MovieProps) {
  const { title, poster_path, release_date, id } = movie;
  const {isFavorite, addFavorite, removeFavorite} = useMovieContext()
  const favorite = isFavorite(id)

  const onFavoriteClick = (e: SyntheticEvent) => {
    e.preventDefault()
    if (favorite) removeFavorite(id)
    else addFavorite(movie)
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
