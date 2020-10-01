import React from "react";
import pokemonList from "../pokemon.json";
import PokeCard from "./PokeCard";
function CardList() {
  return (
    <div class="row row-cols-1 row-cols-md-3">
      {pokemonList.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default CardList;
