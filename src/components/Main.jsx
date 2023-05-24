import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLosading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((res) => setMovieList(res.Search))
      .catch((res) => console.log('Error fetch!', res))
      .finally(() => setIsLosading(false));
  }, []);

  const handleSearch = (value, filter) => {
    const filters = filter === 'all' ? null : `&type=${filter}`;
    setIsLosading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${filters}`)
      .then((res) => res.json())
      .then((res) => {
        res.Response === 'True' ? setMovieList(res.Search) : setMovieList(null);
      })
      .catch((res) => console.log('Error fetch!', res))
      .finally(() => {
        setIsLosading(false);
      });
  };

  return (
    <>
      <main className="content container">
        <Search handleSearch={handleSearch} />
        {!isLoading ? <MovieList movieList={movieList} /> : <Preloader />}
      </main>
    </>
  );
}
