import MovieCard from "./MovieCard"

const Movielist = ({ movies }) => {
  return (
    <div className="movie-list">
        {movies.map((movie, index) => (
            <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
            posterURL={movie.posterURL}
            />
        ))}
    </div>
  )
}

export default Movielist