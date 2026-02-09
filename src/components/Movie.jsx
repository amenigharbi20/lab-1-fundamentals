 function Movie({ title, director, year, rating }) {
  return (
    <div className="movie-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <p>Year: {year}</p>
      <p>
        Rating: {[...Array(Math.round(rating))].map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </p>
    </div>
  )
}
export default Movie;