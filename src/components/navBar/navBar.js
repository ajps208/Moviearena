import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' alt='' src='https://i.postimg.cc/jqwv29mZ/movie-arena-low-resolution-logo-color-on-transparent-background-4.png' /></Link>
      <div className='right-align'>
        <div className='searchBarContainer'>
       <SearchBar/>
        </div>
        <img className='avatar' alt='' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' />
      </div>
    </div>
  );
}

export default NavBar;
