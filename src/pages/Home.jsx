import React,{useState, useEffect} from "react";
import Sidebar from '../componets/Sidebar';
import Navbar from '../componets/Navbar';
import Header from '../componets/Header';
import Card from '../componets/Card';
import axios from "axios";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [selectedType, setSelectedType] = useState();

  useEffect(() => {
    if(selectedType) {
      findMovies();
    }
   
  },[selectedType]);

  const filterMovies = async (e) => {
    setSelectedType(e)
  }

  const findMovies = async () => {
    console.log("Home Movie", selectedType)
    const movieType = selectedType.type === 'Categories' ? `movie/${selectedType.href}` : `discover/movie`;
    const withGenres =  selectedType.type === 'Categories' ? '' :  `&with_genres=${selectedType.href}`
    const movieUrl = `https://api.themoviedb.org/3/${movieType}?api_key=84540058b18ec26438d2c9a10b22e275&language=en-US&page=1${withGenres}`
    console.log(999, movieUrl);
    axios.get(movieUrl).then((response) => {
      setMovies(response.data.results);
    }).catch((err) => {
      console.log(99999, err);
    })
  }

  return (
    <>
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-1">
          <Sidebar onSideItemClick={setSelectedType}/>
        </div>
        <div class="col-span-4">
          <Navbar />
          <Header />
          <Card movies={movies} />
        </div>
      </div>
    </>
  );
};

export default Home;
