import "./MovieList.css";
import Movie from "../Movie/Movie";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2 className="movie-list-title">🎬 Movie Collection</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            director={movie.director}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;