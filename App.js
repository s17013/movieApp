import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {

}

componentDidMount(){
  setTimeout(() => {
    this.setState({
    movies : [
{
  title:"Matrix",
  poster:"http://cfile230.uf.daum.net/image/120165194C241D693330B4"
},
{
  title:"Full Metal jacket",
  poster:"http://blogthumb2.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w2",
},
{
  title:"Old Boy",
  poster:"https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg",
},
{
  title:"Star Wars",
  poster:"http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg",
},
{
  title:"GodFather",
  poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
}
      ]

    })
  }, 5000)
}

_renderMovies = () => {
 const movies =  this.state.movies.map((movie, index) =>{
       return <Movie title={movie.title} poster={movie.poster} key={index} / >
  })
 return movies
}

  render() {
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies(): 'Loading'}
      </div>
    );
  }
}

export default App;
