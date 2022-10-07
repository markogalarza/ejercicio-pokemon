import "../_styles/PokemonCard.css";
import weight from "../../images/weight.svg";
import height from "../../images/height.svg";
import { api } from "../../api";
import { useEffect, useState } from "react";

export const PokemonCard = ({ name }) => {
  const [namePokemon, setNamePokemon] = useState("");
  const [imagePokemon, setImagePokemon] = useState("");
  const [idPokemon, setIdPokemon] = useState("");
  const [weightPokemon, setWeigthPokemon] = useState("");
  const [heightPokemon, setHeigthPokemon] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await api.pokemon(name);
      setNamePokemon(pokemon.name);
      setImagePokemon(pokemon.sprites.other["official-artwork"].front_default);
      setIdPokemon(pokemon.id);
      setWeigthPokemon(pokemon.height);
      setHeigthPokemon(pokemon.weight);
      setTypes(
        pokemon.types.map((elem) => {
          return elem.type.name;
        })
      );
    };
    fetchPokemon();
  }, [name]);

  // const str = 'flexiple';
  // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  // console.log(str2);
  const firstLetterToUpperCase = (changeName) => {
    return changeName.charAt(0).toUpperCase() + changeName.slice(1);
  };

  function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  const idFormat = (id) => {
    return "#" + zeroPad(id, 3);
  };

  return (
    <article className={`card__container card__color--${types[0]}`}>
      <header className="card__header">
        <h2 className="card__title">{firstLetterToUpperCase(namePokemon)}</h2>
        <div className="card__number">{idFormat(idPokemon)}</div>
      </header>

      <div className="card__imageContainer">
        <img className="card__image" src={imagePokemon} alt=""></img>
      </div>

      <section className="card__description">
        <div className="card__tagContainer">
          {types.map((elem) => {
            return <span key={elem} className={`card__tag card__color--${elem}`}>{firstLetterToUpperCase(elem)}</span>;
          })}
        </div>

        <h3 className={`card__textColor--${types[0]} card__descriptiontitle`}>About</h3>

        <div className="card__parameters">
          <div className="card__parameters--info">
            <div className="card__parameters--infocontent">
              <img src={weight} alt=""></img>
              <div className="card__parameters--features">
                {weightPokemon} kg
              </div>
              
            </div>
            <div className="card__parameters--label">Weight</div>
          </div>
          <div class="divider"></div>
          <div className="card__parameters--info">
            <div className="card__parameters--infocontent">
              <img src={height} alt=""></img>
              <div className="card__parameters--features">
                {heightPokemon} m
              </div>
            </div>
            <div className="card__parameters--label">Height</div>
          </div>
        </div>
        <p className="card__parameters--text">
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
      </section>
    </article>
  );
};
