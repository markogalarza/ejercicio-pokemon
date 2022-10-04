import "./_styles/reset.css";
import "./_styles/reboot.css";
import "./_styles/App.css";
import { api } from "../api";
import { PokemonCard } from "./components/PokemonCard";
import {useEffect, useState} from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await api.pokemons();
      console.log(pokemons);
      setPokemons(pokemons.results);
    };
    fetchPokemons();
  }, []);

  return (
    <section className="card__frameglobal">
      <div className="card__frame">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
        
      </div>
    </section>
  );
}

export default App;
