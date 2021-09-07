import "../style/pokelist.css";

function PokeList({ pokemon, onClick }) {
  return (
    <div className="cardbox">
      <div className="img">
        <img
          className="img-h"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
            pokemon.url.split("/")[6]
          }.gif`}
          alt=""
        />
      </div>

      <div className="pokeCard">
        <div className="id">
          #
          {pokemon.url.split("/")[6] < 10
            ? "00" + pokemon.url.split("/")[6]
            : pokemon.url.split("/")[6] < 100
            ? "0" + pokemon.url.split("/")[6]
            : pokemon.url.split("/")[6]}
        </div>
        <div className="name">{pokemon.name}</div>
        <div onClick={onClick} className="type">
          Saiba mais...
        </div>
      </div>
    </div>
  );
}

export default PokeList;
