import { useState } from 'react';

export default function Search(props) {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.handleSearch(value, filter);
  };

  const handleFilter = (event) => {
    console.log(event.target.name);
    setFilter(event.target.name);
  };
  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          type="search"
          className="validate"
          onChange={handleChange}
          valeu={value}
          placeholder="Search"
        />
        <button type="botton" className="btn btn-search" onClick={handleSearch}>
          Search
        </button>
        <p className="radio-area">
          <label>
            <input
              className="with-gap"
              name="all"
              type="radio"
              onChange={handleFilter}
              checked={filter === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="movie"
              type="radio"
              onChange={handleFilter}
              checked={filter === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="series"
              type="radio"
              onChange={handleFilter}
              checked={filter === 'series'}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
}
