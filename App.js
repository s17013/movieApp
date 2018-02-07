import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
{
  title:"Matrix",
  poster:"https://metrouk2.files.wordpress.com/2017/02/the-matrix.jpg?quality=80&strip=all&strip=all"
},
{
  title:"Full Metal jacket",
  poster:"https://images-na.ssl-images-amazon.com/images/I/81trsp4%2BMEL._SL1500_.jpg",
},
{
  title:"Old Boy",
  poster:"https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg",
},
{
  title:"Star Wars",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbzzWAC-uDjLNaxk_YbW_CL_LExZRO6XKEh1xw76Nm7wHWRmhoQ"
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
      {movies.map((movie, index) => {
       return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
      </div>
    );
  }
}

export default App;
