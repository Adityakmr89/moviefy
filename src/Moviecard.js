import {Component} from 'react'

class Moviecard extends Component {
  render=()=> {
    const {movies,addStars,decStars,toggleFev,addToCart} = this.props;
    const {title, plot, poster, price, rating,star,fav,addtocart} =  this.props.movies;
    console.log(this.props.movies);

    return (
      <div className='main'>
      
        {/* //movie card */}
       <div className='movie-card'>
        <div className='left'> 
            <img alt='poster' src={poster}/>
             </div>
        <div className='right'>
            <div className='title'>{title}</div>
            <div className='plot'> {plot}</div>
            <div className='price'> Rs. {price}</div>
            <div className='footer'> 
                <div className='rating'> {rating}</div>
                <div className='star-dis'> 
                  <img className='str-btn' 
                  alt="decrease" 
                  src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
                  onClick={()=>{decStars(movies)}}/>
                  
                  <img alt='star' src='https://cdn-icons-png.flaticon.com/128/616/616490.png'  className='stars'/>

                  <img className='str-btn' 
                  alt="increase" 
                  src='https://cdn-icons-png.flaticon.com/128/1828/1828926.png' 
                  onClick={()=> {addStars(movies)}}/>
                  <span className='starCount'> {star} </span>
                </div>
                {fav ? 
                  <button className='unfavourite-btn' 
                  onClick={()=>{toggleFev(movies)}}>  Un-favourite</button>: <button className='favourite-btn' 
                  onClick={()=>{toggleFev(movies)}}> 
                  Favourite</button>}
                
                {addtocart ? 
                  <button className='removecart-btn'  
                  onClick={()=>{addToCart(movies)}}>  Delete </button>: <button className='addcart-btn' 
                  onClick={()=>{addToCart(movies)}}> 
                  Add to Cart</button>}

            </div>
         </div>
        </div>
       
      </div>
    )
  }
}

export default Moviecard;