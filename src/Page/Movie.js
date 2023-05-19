import React from 'react'
import NavBar from '../components/navBar/navBar'
import MovieDetails from '../components/MovieDetails/MovieDetails' 
import Footer from '../components/Footer/Footer'
function Movie() {
  return (
    <div>
      <NavBar/> 
      <MovieDetails/>
      <Footer/>
    </div>
  )
}

export default Movie