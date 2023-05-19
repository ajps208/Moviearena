import React, { useContext, useEffect, useState } from 'react';
import './SearchResult.css';
import { ResultContext } from '../../ResultContext';
import axios from 'axios';
import { apiKey, imgUrl } from '../../constants/Constant';
import YouTube from 'react-youtube';

function SearchResult() {
  const [movie, setMovie] = useState(null);
  const [resultContext] = useContext(ResultContext);
  const [urlId, setUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (resultContext) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${resultContext}?api_key=${apiKey}`)
        .then((response) => {
          console.log(response.data);
          setMovie(response.data);
        })
        .catch((err) => {
          alert('Network error');
        });
    }
  }, [resultContext]);

  const opts = {
    height: '399',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const movieTrailer = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrl(response.data.results[0].key);
          setIsPlaying(true);
        } else {
          alert('No trailer is available');
        }
      })
      .catch((error) => {
        alert('Error fetching data');
        console.log(error);
      });
  };

  const onEnd = () => {
    setUrl(null);
    setIsPlaying(false);
  };

  const onClose = () => {
    setUrl(null);
    setIsPlaying(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ''})`, height: '100vh' }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="rating-button-container">
          <button className='button' onClick={() => movie?.id && movieTrailer(movie.id)}>Play</button>
          <p className="rating">Rating: {movie ? movie.vote_average : ""}</p> {/* Added rating */}
        </div>
        <h2 className="des">{movie?.overview}</h2>
      </div>
      <div></div>
      <br />
      {urlId && (
        <div className="youtube-player">
          <YouTube videoId={urlId} opts={opts} onEnd={onEnd} />
          {isPlaying && (
            <button className="close-button" onClick={onClose}>
              X
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
