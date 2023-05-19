import './Banner.css'
import React, { useEffect, useState } from 'react'
import { apiKey, imgUrl } from '../../constants/Constant'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Banner() {
  const [movie, setMovie] = useState()
  const [urlId, setUrl] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {
      setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
  }, [])

  const opts = {
    height: '399',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const movieTrailer = (id) => {
    axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrl(response.data.results[0])
        setIsPlaying(true)
      } else {
        alert('No data is available')
      }
    })
    .catch((error) => {
      alert("Error fetching data");
      console.log(error);
    });
  }

  const onEnd = (event) => {
    setUrl(null);
    setIsPlaying(false);
  }

  const onClose = () => {
    setUrl(null);
    setIsPlaying(false);
  }

  return (
    <div style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }} className='banner'>
      <div className="content">
        <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
        <div className="rating-button-container">
          <button className='button' onClick={() => movie?.id && movieTrailer(movie.id)}>Play</button>
          <p className="rating">Rating: {movie ? movie.vote_average : ""}</p> {/* Added rating */}
        </div>
        <h2 className='des'>{movie ? movie.overview : ""}</h2>
      </div>

      <div className='fade'></div>
      {urlId && (
        <div className="youtube-player">
          <YouTube
            videoId={urlId.key}
            opts={opts}
            onEnd={onEnd}
          />
          {isPlaying && (
            <button className="close-button" onClick={onClose}>
              X
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Banner
