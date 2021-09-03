import "../style/pokelist.css";

function PokeList(props) {
  return (
    <div className="cardbox">
      <div className="img">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
            props.pokemon.url.split("/")[6]
          }.gif`}
          alt=""
        />
      </div>

      <div className="pokeCard">
        <div className="id">
          #
          {props.pokemon.url.split("/")[6] < 10
            ? "00" + props.pokemon.url.split("/")[6]
            : props.pokemon.url.split("/")[6] < 100
            ? "0" + props.pokemon.url.split("/")[6]
            : props.pokemon.url.split("/")[6]}
        </div>
        <div className="name">{props.pokemon.name}</div>
        <button className="type">Saiba mais...</button>
      </div>
    </div>
  );
}

export default PokeList;
