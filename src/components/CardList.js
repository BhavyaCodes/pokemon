import React from "react";
import pokemonList from "../pokemon.json";
import PokeCard from "./PokeCard";
function CardList({searchQuery}) {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      {pokemonList.filter(pokemon => pokemon.name.includes(searchQuery)).map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default CardList;
