import Item from './Item';
// returns the list of items from the api
const List = ({ output, getFavourites, favourites }) => {
   return(
      <div className='listCont'>
         {/* If the results are undefined display the items  */}
         {(output.results !== undefined) ? (
            <>
               {(output.resultCount !== 0) ? (
                  <>
                  <div className='listItems'>
                     {/* Map through the output and display each item */}
                     {output.results.map((item, index) => (
                        <Item
                           item={item}
                           key = {index}
                           getFavourites={getFavourites}
                           favourites={favourites}
                        />
                     ))}
                  </div>
                  </>
               ) : (
                  <>
                  {/*error text*/}
                  <div className='err'>
                     No results were found.
                  </div>
                  </>
               )}
            </>
         ) : (
            <>
            {/*welcome text */}
            <div className='welcome'>
               Please use the search bar above.
            </div>
            </>
         )}
      </div>
   )
};
export default List;
