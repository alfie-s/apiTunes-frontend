// bin icon for fave items from react icons
import { CgTrash } from 'react-icons/cg'
// returning items from favourtie list
const FaveItem = ({ item, getFavourites }) => {
   // API request to remove from favourites
   const removeItem = async () => {
      await fetch(`/api/delete/${item.id}`, {
         method: 'DELETE'
      });
      // call function to update list of favourites
      getFavourites();
   }
   // function to remove items from favourites
   const handleRemove = (e) => {
      // Prevent default actions
      e.preventDefault();
      // call function to remove the item
      removeItem();
   }
   return (
      <div className='faveItem'>
         <div className='img'>
            {/* Display the artwork*/}
               <img src={item.faveItem.artworkUrl100} alt='artwork' />
         </div>
         {/* Display the item's info */}
         <div className='itemInfo'>
         {/* if item does not have a trackName then show the collectionName (mainly for audiobooks) */}
         {!item.faveItem.trackName ? (
               <div className='collectionName'>
                  <span>Name:</span> {item.faveItem.collectionName}
               </div>
            ) : (
               <div className='trackTitle'>
                  <span>Name:</span> {item.faveItem.trackName}
               </div>
            )}
            <div className='artistName'>
               <span>Artist:</span> {item.faveItem.artistName}
            </div>
            {/*use warpper type to dispaly audibook type otherwise use kind*/}
            {item.kind ? (
               <div className='kind'>
                  <span>Type:</span> {item.faveItem.kind}
               </div>
            ) : (
               <div className='mediaType'>
                  <span>Type:</span> {item.faveItem.wrapperType}
               </div>
            )}
         </div>
      {/* remove item button */}
         <div className='btns'>
            <div className='removeBtn'>
               <button onClick={handleRemove}>
               <CgTrash />
               </button>
            </div>
         </div>
      </div>
   )
}
export default FaveItem;