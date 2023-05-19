import React, { useContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../constants/Constant';
import './SearchBar.css';
import { SearchContext } from '../../SearchContext';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchContext, setsearchContext] = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      const results = response.data.results;
      setsearchContext(results);
      navigate('/mdetails')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-bar-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
