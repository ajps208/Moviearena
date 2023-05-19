import React, { useContext } from 'react';
import { SearchContext } from '../../SearchContext';
import './MovieDetails.css';
import { ResultContext } from '../../ResultContext';
import { useNavigate } from 'react-router-dom'


function MovieDetails() {
  const [searchContext] = useContext(SearchContext);
  const [resultContext, setresultContext] = useContext(ResultContext);
  const navigation = useNavigate();

  console.log(searchContext);

  if (searchContext) {
    return (
      <div className="rowq">
        <div className="posters">
          {searchContext.map((movie) => (
            <div key={movie.id}>
              {movie.poster_path && (
                <>
                  <img
                    onClick={() => {
                      setresultContext(movie.id);
                      navigation('/search')

                    }}
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h4>{movie.title}</h4>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null; // or any other fallback UI when searchContext is null
  }
}

export default MovieDetails;
