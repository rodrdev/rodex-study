import "../style/information.css";
import "../style/types.css";

import { useState, useEffect } from "react";
import axios from "axios";
function InformationPokemon({ id }) {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(data);
  };
  useEffect(() => {
    getPokemon(id);
  }, [id]);
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
          <div className="col pokemon-id">
            #
            {pokemon?.id < 10
              ? "00" + pokemon?.id
              : pokemon?.id < 100
              ? "0" + pokemon?.id
              : pokemon?.id}
          </div>
        </div>
        <div className="row">
          <div className="col pokemon-name">{pokemon?.name}</div>
        </div>
        <div className="row">
          {pokemon?.types.map(({ type }) => (
            <div key={type.name} className="col ">
              <div className={`pokemon-type ${type.name}`}>{type.name}</div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="title-abilities">Abilities</div>
          {pokemon?.abilities.map(({ ability }) => (
            <div key={ability.name} className="col">
              <div className="pokemon-abilities">{ability.name}</div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">HEIGHT</div>
          <div className="col">WEIGHT</div>
        </div>

        <div className="row">
          <div className="col">
            <div className="pokemon-information">
              {pokemon?.height < 10 ? "0," + pokemon?.height : pokemon?.height}m
            </div>
          </div>
          <div className="col">
            <div className="pokemon-information">{pokemon?.weight}Kg</div>
          </div>
        </div>
        <div className="row">
          <div className="col">BASE EXP</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="pokemon-information">
              {pokemon?.base_experience}
            </div>
          </div>
        </div>
        <div className="row">
          <div>STATS</div>
          <div className="col">
            <div className="pokemon-states hp">
              <div className="transform">HP</div>
            </div>
          </div>
          <div className="col">
            <div className="pokemon-states atk">
              <div className="transform">ATK</div>
            </div>
          </div>

          <div className="col">
            <div className="pokemon-states def">
              <div className="transform">DEF</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="pokemon-stat">{pokemon?.stats[0].base_stat}</div>
          </div>
          <div className="col">
            <div className="pokemon-stat">{pokemon?.stats[1].base_stat}</div>
          </div>

          <div className="col">
            <div className="pokemon-stat">{pokemon?.stats[2].base_stat}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationPokemon;
