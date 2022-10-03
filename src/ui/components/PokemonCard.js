import "../_styles/PokemonCard.css";
import bulbasaur from "../../images/bulbasaur.svg";
import weight from "../../images/weight.svg";
import height from "../../images/height.svg";

export const PokemonCard = () => {
  return (
    <article className="card__container--grass">
      <header className="card__header">
        <h2 className="card__title">Bulbasaur</h2>
        <div className="card__number">#001</div>
      </header>

      <div className="card__imageContainer">
        <img className="card__image" src={bulbasaur} alt=""></img>
      </div>

      <section className="card__description">
        <div className="card__tagContainer">
          <span className="card__tag card__color--grass">Grass</span>
          <span className="card__tag card__color--poison">Poison</span>
        </div>

        <h3 className="card__textColor--grass card__descriptiontitle">About</h3>

        <div>
          <div>
            <img src={weight}></img>
            <div>6,9 kg</div>
            <div>Weight</div>
          </div>
          <div>
            <img src={height}></img>
            <div>0,7 m</div>
            <div>Height</div>
          </div>
        </div>

        <p>
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
      </section>
    </article>
  );
};
