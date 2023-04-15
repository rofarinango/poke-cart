import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import {NavBar} from '../components'
import {PokemonDetail, PokemonMarket, PokemonCart} from '../views';

function App() {
  const [collection, setCollection] = useState([]);

  const addToCollection = (pokemon) => {
    setCollection(prevCollection => [...prevCollection, pokemon]);
  }
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar collection={collection}/>
        <Routes>
            <Route path="/" element={<PokemonMarket/>}/>
            <Route path="/:pokemon" element={<PokemonDetail collection = {collection} addToCollection={addToCollection}/>}/>
            <Route path="/collection" element={<PokemonCart collection = {collection}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
