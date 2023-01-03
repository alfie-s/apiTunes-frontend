// Import components from react
import { useState } from 'react';
// Import react-router-dom components for routes and links
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import CSS
import './myStyles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from './components/Home';
import Favourites from './components/Favourites';

function App() {
  // set state for favourites
  const [favourites, setFavourites] = useState();

  // Function to fetch the list of favourites
  const getFavourites = async () => {
    const result = await fetch('/api');
    const data = await result.json();
    setFavourites(data.favourites);
  }

  return (
      <div className='App'>
      <BrowserRouter>
        <Routes>
        {/* routes for the home button and favourites button with props */}
          <Route exact path='/' element={<Home getFavourites={getFavourites} favourites={favourites}/>}/>
          <Route exact path='/favourites' element={<Favourites getFavourites={getFavourites} favourites={favourites}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
