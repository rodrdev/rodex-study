import "../style/information.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
function InformationPokemon({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const getPokemon = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/395`);
    setPokemon(data);
    console.log(data);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <>
      <div className="card-information">
        <div className="row">
          <div className="col">
            <img
              className="pokemon-card"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            #
            {pokemon?.id < 10
              ? "00" + pokemon?.id
              : pokemon?.id < 100
              ? "0" + pokemon?.id
              : pokemon?.id}
          </div>
        </div>
        <div className="row">
          <div className="col">{pokemon?.name}</div>
        </div>
        <div className="row">
          {pokemon?.types.map((t) => (
            <div className="col">{t.type.name}</div>
          ))}
        </div>

        <div className="row">
          <div>Abilities</div>
          {pokemon?.abilities.map((abt) => (
            <div className="col">{abt.ability.name}</div>
          ))}
        </div>
        <div className="row">
          <div className="col">HEIGHT</div>
          <div className="col">WEIGHT</div>
          <div className="col">BASE EXP</div>
        </div>
        <div className="row">
          <div className="col">{pokemon?.height}m</div>
          <div className="col">{pokemon?.weight}Kg</div>
          <div className="col">{pokemon?.base_experience}</div>
        </div>
        <div className="row">
          <div>STATS</div>
          <div className="col">HP</div>
          <div className="col">ATK</div>
          <div className="col">DEF</div>
        </div>
        <div className="row">
          <div className="col">{pokemon?.stats[0].base_stat}</div>
          <div className="col">{pokemon?.stats[1].base_stat}</div>
          <div className="col">{pokemon?.stats[2].base_stat}</div>
        </div>
      </div>
    </>
  );
}

export default InformationPokemon;
