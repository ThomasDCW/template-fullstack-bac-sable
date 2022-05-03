import { useState, useEffect } from "react";
import axios from "axios";
import SApipokemon from "./style";

export default function Apipokemon() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then(({ data }) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <SApipokemon>
      {pokemons.map((pokemon, id) => {
        return (
          <li>
            <p>{pokemon.name.toUpperCase()}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                id + 1
              }.png`}
              alt="img"
            />
          </li>
        );
      })}
    </SApipokemon>
  );
}
