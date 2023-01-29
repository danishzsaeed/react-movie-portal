import React, {useState, useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=84540058b18ec26438d2c9a10b22e275&language=en-US&page=1";


const Header = () => {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  getMovies();
},[]);

const getMovies = async () => {
  axios.get(API_URL).then((response) => {
    setMovies(response.data.results);
  }).catch((err) => {
    console.log(err);
  })
}

return (
  <div className='sidebar mt-5 mx-7 '>
    <Slide>
    {
    movies.map((movie) => (
      <div className="each-slide-effect" key={movie.id}>
      <div style={{ 'backgroundImage': `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` , "backgroundColor": "rgba(0, 0, 0, 0.575)" }}>
          <span className='font-semibold text-2xl'>{movie.original_title}</span>
          <span className='font-medium text-base'>{movie.overview}</span>
      </div>
  </div>
    ))
  }
  </Slide>
  </div>
);
};

export default Header