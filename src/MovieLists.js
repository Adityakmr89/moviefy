import {Component} from 'react'
import Moviecard  from './Moviecard';

class MovieLists extends Component {
    render() {

        // const {title, plot, price, rating, star,fav,addtocart} = this.state.movies;
        const {movies,addStars,decStars,toggleFev,addToCart} = this.props;
        console.log(this.props);
        return(
            <>
            {movies.map((movie) => <Moviecard movies={movie}
                  key={movie.id}
                  addStars={addStars}
                  decStars={decStars}
                  toggleFev={toggleFev}
                  addToCart={addToCart}
            />)}
            </>
        )
    }
  
  }

export default MovieLists;