// Import components from react
import { useEffect, useState } from 'react';
// Import heart icons from react icons for favourite button
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// returns and item for the list of items
const Item = ({ item, getFavourites, favourites }) => {
   // boolean state for faveourites when clicked on
   const [addFavClicked, setAddFavClicked] = useState(false);

   // getting the id of the item either through track id, collection id, artist id etc
   // as some media types have different id keys in the api
   const id = item.trackId ? item.trackId : ( 
         item.artistId && item.collectionId ? 
         (
            Number(item.artistId) + Number(item.collectionId)
         )
         : (
         item.artistId ? item.artistId : item.collectionId
         )
      );
   // fetch using POST request to add item to favourites
   const addItem = async () => {
      await fetch('/api/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id,
            faveItem: item
         })
      });
      getFavourites();
   }
   // fetch using DELETE and the id to remove item from favourites
   const removeItem = async () => {
      await fetch(`/api/delete/${id}`, {
         method: 'DELETE'
      });
      getFavourites();
   }
   // function to add to favourites
   const handleAdd = (e) => {
      // prevent default actions
      e.preventDefault();
      // change state
      setAddFavClicked(true);
      // save to favourites
      addItem();
   }
   // function to remove from favourites
   const handleRemove = (e) => {
      // prevent default actions
      e.preventDefault();
      // change state
      setAddFavClicked(false);
      // remove from favourites
      removeItem();
   }
   //checks if item has been added to favorites
   useEffect(() => {
      // if there is something in favourites
      if (favourites && favourites !== undefined) {
         // loop favorites
         for (let i = 0; i < favourites.length; i++) {
            // if id in faveourtes is equal to the id of the item
            if (favourites[i].id === id) {
               //change the boolean state
               setAddFavClicked(true);
            }
         }
      }
      // dependencies
   }, [favourites, id])
   return (
      <div className='ListItem'>
         <div className='img'>
            {/* display artwork from url key */}
               <img src={item.artworkUrl100} alt='artwork' />
         </div>
         {/* display item info if it has track name or collection name (for audio books) */}
         <div className='itemInfo'>
         {!item.trackName ? (
               <div className='collectionName'>
                  <span>Name:</span> {item.collectionName}
               </div>
            ) : (
               <div className='trackTitle'>
                  <span>Name:</span> {item.trackName}
               </div>
            )}
            <div className='artistName'>
               <span>Artist:</span> {item.artistName}
            </div>
            {/*use warpper type to dispaly audibook type otherwise use kind*/}
            {item.kind ? (
               <div className='kind'>
                  <span>Type:</span> {item.kind}
               </div>
            ) : (
               <div className='mediaType'>
                  <span>Type:</span> {item.wrapperType}
               </div>
            )}
         </div>
         {/* Section that contains the buttons */}
         <div className='btns'>
            <div className='heart-btn'>
               {/* if clicked show red heart for favourites or remove it and display grey heart */}
               {addFavClicked ? (
                  // On click, run 'handleRemove'
                  <button onClick={handleRemove}>
                  <AiFillHeart />
                  </button>
               ) : (
                  <button onClick={handleAdd}>
                  <AiOutlineHeart />
                  </button>
               )}
            </div>
         </div>
      </div>
   )
}
export default Item