// Import components from react
import { useState } from 'react'
// Import components
import Header from '../components/Header'
import Search from '../components/Search'
import List from '../components/List.js'
// returns the home section
const Home = ({getFavourites, favourites}) => {
   // states for serch terms, media types and the output list
   const [searchTerm, setSearchTerm] = useState('');
   const [media, setMedia] = useState('all');
   const [output, setList] = useState({});
   // Function to fetch the search results
   const getList = async () => {
      // Make the API call by sending the search term and media type to the backend using key and value pairs
      const result = await fetch(`/search?term=${searchTerm}&media=${media}`);
      const data = await result.json();
      // Save the fetched data in 'output'
      setList(data.response);
   }
   // Function to handle the search submission
   const handleSubmit = (e) => {
      e.preventDefault();
      // If searchTerm is empty - alert the user otherwise call getList function
      if (searchTerm === '') {
         alert(`Please enter a search term before searching`);
      } else {
         getList();
      }
   }
   // Function to handle the term change
   const handleSearchTermChange = (e) => {
      // Get the value and save it in searchTerm
      setSearchTerm(e.target.value);
   }
   // Function to handle the media type change
   const handleMediaChange = (e) => {
      // Get value and save it media
      setMedia(e.target.value);
   }
   return (
      <div className='home'>
         <div className='headerSec'>
            <Header />
         </div>
         <div className='searchItems'>
            <div className='searchContSection'>
               <Search
                  handleSubmit={handleSubmit}
                  searchTerm={searchTerm}
                  handleSearchTermChange={handleSearchTermChange}
                  handleMediaChange={handleMediaChange}
               />
            </div>
            <div className='listContSection'>
               <List 
                  output={output}
                  getFavourites={getFavourites}
                  favourites={favourites}
               />
            </div>
         </div>
      </div>
   )
}
export default Home
