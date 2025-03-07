import MovieLists from "./MovieLists";
import Navbar from "./Navbar";
import React from "react";
import {movies} from './movieData';

import './index.css';

class App extends React.Component {
  constructor() {
    super ();
      this.state = { 
            movies: movies, 
            cartCount: 0
      }}
    
    handleInStar = (movie)=>{
        const movies = this.state.movies;
        const mId = movies.indexOf(movie);
        if(movies[mId].star >=5 ){
            return;
        }
        
        movies[mId].star += 0.5;
        this.setState({movies: movies});
    }

    handleDecStar = (movie)=>{
      const movies = this.state.movies;
      const mId = movies.indexOf(movie);
      if(movies[mId].star <=0 ){
          return;
      }
      
      movies[mId].star -= 0.5;
      this.setState({movies: movies});
  }
  handleToggleFev = (movie)=>{
    const movies = this.state.movies;
    const mId = movies.indexOf(movie);
    movies[mId].fav = !movies[mId].fav;
    this.setState({movies: movies});
}
handleAddtoCart = (movie)=>{
  const movies = this.state.movies;
  let cartCount = this.state.cartCount;
  const mId = movies.indexOf(movie);
  movies[mId].addtocart = !movies[mId].addtocart;
  if(movies[mId].addtocart){
    cartCount = cartCount + 1;
  }
else{ 

    cartCount = cartCount - 1;
}
this.setState({movies: movies, cartCount: cartCount});

}
  render() {
    const {movies} = this.state;
    const {cartCount} = this.state;
    return (
      <div>
        <Navbar cartCount={cartCount} />
        <MovieLists movies={movies} 
                key={movies.id} 
                addStars={this.handleInStar}
                decStars = {this.handleDecStar}
                toggleFev = {this.handleToggleFev}
                addToCart = {this.handleAddtoCart} 
                
                />
      </div>
    );
  }
}

export default App;
