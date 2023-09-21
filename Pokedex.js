import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonData from "../data";

function Pokedex() {
  return (
    <div className="pokedex">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
