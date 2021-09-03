import "./style/index.css";
import PokeList from "./components/pokelist";
import InformationPokemon from "./components/InformationPokemon";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState(null);
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

  return (
    <>
      <div
        className="container"
        style={{ border: "1px solid red", maxWidth: "1250px" }}
      >
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
                    <PokeList pokemon={pokemon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {clickedPokemon && (
            <div className="col">
              <InformationPokemon id={clickedPokemon} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
