import Movie from './Movie';

export default function MovieList(props) {
  const { movieList } = props;

  return (
    <div className="movieList">
      {!movieList ? (
        <p>Nothing not found</p>
      ) : (
        movieList.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      )}
    </div>
  );
}
