import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLosading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
=======
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
>>>>>>> 5edf871cd60d0f3349e9f22de0da7b07b3405e5c
      .then((res) => res.json())
      .then((res) => setMovieList(res.Search))
      .catch((res) => console.log('Error fetch!', res))
      .finally(() => setIsLosading(false));
  }, []);

  const handleSearch = (value, filter) => {
    const filters = filter === 'all' ? '' : `&type=${filter}`;
    setIsLosading(true);
<<<<<<< HEAD
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${filters}`)
=======
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${filters}`)
>>>>>>> 5edf871cd60d0f3349e9f22de0da7b07b3405e5c
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
