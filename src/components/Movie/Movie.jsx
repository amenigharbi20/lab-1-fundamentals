import "./Movie.css";

function Movie({ title, director, year, rating }) {
  const stars = '⭐'.repeat(rating);

  return (
    <div className="movie">
      <h3 className="movie-title">{title}</h3>
      <p className="movie-director"><strong>Director:</strong> {director}</p>
      <p className="movie-year"><strong>Year:</strong> {year}</p>
      <div className="movie-rating">{stars}</div>
    </div>
  );
}

export default Movie;