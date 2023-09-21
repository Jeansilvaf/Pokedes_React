import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Description: {pokemon.description}</p>
    </div>
  );
}

export default PokemonCard;
