import "./_styles/reset.css";
import "./_styles/reboot.css";
import "./_styles/App.css";
import "./_styles/PokemonCard.css";
import { api } from "../api";
import { PokemonCard } from "./components/PokemonCard";
import { useEffect, useState } from "react";
import pokeball from "../images/pokeball.svg";
import search from "../images/search.svg";
import gitsymbol from "../images/gitsymbol.svg";
import pokeapi from "../images/pokeapi.svg";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await api.pokemons();
      setPokemons(pokemons.results);
      setFilteredPokemons(pokemons.results);
    };
    fetchPokemons();
  }, []);

  const filterPokemons = (event) => {
    setFilteredPokemons(
      pokemons.filter((elem) => {
        return elem.name.toLowerCase().includes(event.target.value.toLowerCase());
      })
    );

    // setFilteredPokemons(pokemons.filter((elem)=>{
    //   return true
    // }))
  };

  return (
    <>
      <header className="frameheader">
        <div className="feature_pokeball">
          <img src={pokeball} alt="img_logo"></img>
        </div>
        <div>My Pokédex</div>
      </header>
      <nav className="framenav">
        <div className="framesearch">
          <div className="feature_search">
            <img src={search} alt="Search"></img>
          </div>
          <div className="feature_input">
            <input
              type="search"
              className="frameinput"
              onChange={filterPokemons}
            />
          </div>
        </div>
      </nav>
      <section className="card__frameglobal">
        <div className="card__frame">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </section>
      <footer className="framefooter">
        <div className="framefooter__features">
          <img src={gitsymbol}></img>
          <div class="divider"></div>
          <img src={pokeapi}></img>
        </div>
      </footer>
    </>
  );
}

export default App;
