import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NavBar} from '../components'
import {PokemonDetail, PokemonMarket, PokemonCart} from '../views';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<PokemonMarket/>}/>
            <Route path="/:pokemon" element={<PokemonDetail/>}/>
            <Route path="/collection" element={<PokemonCart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
