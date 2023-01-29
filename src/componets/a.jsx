import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=84540058b18ec26438d2c9a10b22e275&language=en-US&page=1";


const Header = () => {

  const [movies, setMovies] = useState(null);
  console.log(movies);
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

useEffect(() => {
  axios.get(API_URL).then((response) => {
    setMovies(response.data.results);
  });
},[]);

https://image.tmdb.org/t/p/w500/    backdrop_path

return (
  <div className='sidebar mt-5 mx-7'>
    <Slide>
      {
        movies.map((movie) => (
          <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
          {/* <div style={{ 'backgroundImage': `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}> */}
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



{
    movies.map((movie) => (
      <div className="each-slide-effect" key={movie.id}>
      <div style={{ 'backgroundImage': `url(${images[0]})` }}>
      {/* <div style={{ 'backgroundImage': `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}> */}
          <span className='font-semibold text-2xl'>{movie.original_title}</span>
          <span className='font-medium text-base'>{movie.overview}</span>
      </div>
  </div>
    ))
  }