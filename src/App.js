import "./style/index.css";
import PokeList from "./components/pokelist";
import InformationPokemon from "./components/InformationPokemon";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState(1);
  const pokemonData = true;
  const getPokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );

    setPokemons(data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getClickedPokemon = (id) => {
    setClickedPokemon(id);
    console.log(id);
  };

  return (
    <>
      <div className="container" style={{ maxWidth: "1250px" }}>
        <div className="row">
          <div className="col-auto">
            <div className={pokemonData ? "pokemons-sidebar" : "pokemons"}>
              <div className="row">
                {pokemons?.results?.map((pokemon) => (
                  <div
                    className={`col-12  ${
                      pokemonData ? "col-md-4" : "col-md-3"
                    }  `}
                    key={pokemon.name}
                  >
                    <PokeList
                      pokemon={pokemon}
                      onClick={() =>
                        getClickedPokemon(pokemon.url.split("/")[6])
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {clickedPokemon && (
            <div className="col" style={{ position: "relative" }}>
              <InformationPokemon id={clickedPokemon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
