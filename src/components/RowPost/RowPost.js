import React, { useEffect, useState,useContext } from 'react'
import {imgUrl} from '../../constants/Constant'
import axios from '../../axios'
import { MovieContext } from '../../MovieContext'
import { useNavigate } from 'react-router-dom'

import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [movieContext, setMovieContext] = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert('Network error');
      });
  }, [props.url]);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => {
          return (
            <img
              onClick={() => {setMovieContext(obj.id);
              navigate('/details')
              }}
              className={props.isSmall ? 'small' : 'poster'}
              src={`${imgUrl + obj.backdrop_path}`}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
}


export default RowPost
