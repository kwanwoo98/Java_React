import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
<<<<<<< HEAD
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
<<<<<<< HEAD
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]
=======
  const [movies, setMovies] = useState([
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    // {
    //   Title: "The Amazing Spider-Man",
    //   Year: "2012",
    //   imdbID: "tt0948470",
    //   Type: "movie",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
    // },
    // {
    //   Title: "The Amazing Spider-Man 2",
    //   Year: "2014",
    //   imdbID: "tt1872181",
    //   Type: "movie",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
    // },
    // {
    //   Title: "The Amazing World of Gumball",
    //   Year: "2011–2019",
    //   imdbID: "tt1942683",
    //   Type: "series",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BYWU1YTA4OGUtNjcxMC00ZTllLTgxYWUtY2U5NmViZTU0MmNjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg"
    // }
<<<<<<< HEAD
  );

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6acde185`;
  
    const response = await fetch(url);
    const responseJson = await response.json();
  
    console.log(responseJson);

    if(responseJson.Search) {
=======
  ]);

  const [searchValue, setSearchValue] = useState('');

  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b430e986`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    if (searchValue.length > 3) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

<<<<<<< HEAD
=======

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('favourites'));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newList = [...favourites, movie];
    setFavourites(newList);
    saveToLocalStorage(newList);
  };

  const removeMovie = (movie) => {
    const newList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newList);
    saveToLocalStorage(newList);
  };

<<<<<<< HEAD

  return (
    <div className='container-fluid movie-app'>
       <div className='row align-items-center my-4'>
        <MovieListHeading heading='영화 검색과 선호작 등록' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
      <MovieList movies={movies} handleClick={addFavouriteMovie} addMovie={true}/>
      </div>
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='내 선호작' />
        <MovieList movies={favourites} handleClick={removeMovie} addMovie={false} />
        </div>
    </div>
=======
  return (
    // <div className='container-fluid movie-app'>
    //   <div className="row">
    //     {/* <MovieList movies={movies} /> */}
    //   </div>
    // </div>
    //-----------------------------------------------
    // <div className='container-fluid movie-app'>
    //   <div className='row align-items-center my-4'>
    //     <MovieListHeading heading='Movies' />
    //     <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    //   </div>
    //   <div className="row">
    //     <MovieList movies={movies} handleClick={addFavouriteMovie}/>
    //   </div>
    // </div>
    //-----------------------------------------------
    <div className='container-fluid movie-app'>
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='영화 검색과 선호작 등록' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} handleClick={addFavouriteMovie} addMovie={true} />
      </div>
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='내 선호작' />
        <MovieList movies={favourites}
          addMovie={false}
          handleClick={removeMovie}
        />
      </div>
    </div>

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
  );
}

export default App;
