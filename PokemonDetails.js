import React from 'react';
import { useParams } from 'react-router-dom';
import pokemonData from '../data';

function PokemonDetails() {
  
  const { id } = useParams();

  
  const pokemon = pokemonData.find((p) => p.id === parseInt(id));

  
  if (!pokemon) {
    return <div>Pokémon not found.</div>;
  }

  
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name} Details</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      <p>Description: {pokemon.description}</p>
    </div>
  );
}

export default PokemonDetails;
