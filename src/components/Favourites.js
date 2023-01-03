// import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Import components
import FaveItem from './FaveItem';
// returning favourites list
const Favourites = ({getFavourites, favourites}) => {
   return (
      <div className='favCont'>
         <div className='headerSec'>
            <div className='headerCont'>
               <div className='header'>
                  Your Favourites
               </div>
               <div className='favBtnCont'>
            {/* home button link */}
                  <Link to='/'>
                     <Button className='favBtn btn btn-primary'>Home</Button>
                  </Link>
               </div>
            </div>
         </div>
         <div className='favourites'>
            {/* if nothing in favourites, display message or display favourites */}
            {(favourites === undefined) ? (
               <div className='empty'>
                  Add a favourite to see it here.
               </div>
            ) : (
               <div className='faveItems'>
                  {/* mapping favourites and index for key */}
                  {favourites.map((item, index) => (
                     <FaveItem
                        item={item}
                        key={index}
                        getFavourites={getFavourites}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}
export default Favourites
