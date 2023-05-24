export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card movie" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img src={`https://placehold.co/300x400?text=${title}`} alt={title} />
        ) : (
          <img className="activator" alt={title} src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year}
          <span> {type}</span>
        </p>
      </div>
    </div>
  );
}
