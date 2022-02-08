import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/bootstrap-icons.css";
import "./App.css";
import MovieList from "./movies/MovieList";
import Filter from "./movies/Filter";


const App = () => {
  const Lists = [
    
    {
      title : "Spider Man",
      description:"Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée) est un super-héros évoluant dans l'univers Marvel de la maison d'édition ...",
      posterURL:"www.netflix-fr/SpiderMan",
      rate:3
    },
    {
      title : "The Black Panther",
      description:"Adapté du personnage de Marvel Comics T'Challa alias Black Panther (interprété par Chadwick Boseman), il s'agit du dix-huitième film de l'univers ...",
      posterURL:"www.netflix-fr/BlackPanther",
      rate:2
    },
    {
      title : "Teen Wolf",
      description:"Teen Wolf est une série télévisée américaine en cent épisodes d'environ 42 minutes créée par Jeff Davis, adaptée à partir du long métrage du même nom, ...",
      posterURL:"www.netflix-fr/TeenWolf",
      rate:1
    },
    {
      title : "Good Doctor",
      description:"Good Doctor ou Le Bon Docteur au Québec (The Good Doctor) est une série télévisée dramatique américaine développée par David Shore, basée sur la série ...",
      posterURL:"www.netflix-fr/GoodDoctor",
      rate:2
    },
  ];
  const [movies,setMovies]= useState(Lists);
  const [keyword,setKeyword] = useState('');

  const addMovie = (movie)=>{
  const newMoviesList = [...movies,movie];
    setMovies(newMoviesList);
    console.log(newMoviesList);
  }
  const handleSearch = ()=>{
      return keyword ? movies.filter(movie=> movie.title.toLowerCase().includes(keyword.toLowerCase()) ||  movie.rate == keyword) : movies;

  }
  const moviesFiltered =handleSearch();

  return( 
            <div>
              <Filter keyword = {keyword} setKeyword = {setKeyword}/>
                <MovieList
                  Lists={moviesFiltered}
                  add = {addMovie}
                  />
            </div>
  );
};


export default App;
