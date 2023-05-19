
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Details from './Page/Details';
import Home from './Page/Home';
import Movie from './Page/Movie';
import Resultmovie from './Page/Resultmovie';
import Context from './MovieContext';
import Search from './SearchContext';
import Result from './ResultContext';

function App() {
  
  return (
   <div className='app'>
    <Search>
      <Result>
   <Context>
    <Router>
        <Routes>
        <Route path='/' element={<Home/>} /> 
          <Route path='/details' element={<Details/>} /> 
          <Route path='/mdetails' element={<Movie/>} /> 
          <Route path='/search' element={<Resultmovie/>} /> 
        </Routes>
      </Router> 
      </Context>
      </Result>
      </Search>
   </div>
  );
}

export default App;
