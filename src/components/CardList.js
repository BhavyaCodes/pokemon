import React from "react";
import pokemonList from "../pokemon.json";
import PokeCard from "./PokeCard";

function CardList({ searchQuery }) {
  /**
   * This function sorts pokemons by their ids in ascending order
   */

  const pokemonComparator = (firstPokemon, secondPokemon) => {
    /**
     * Math.sign() return -1, 0 or 1 *only* for any signed integer
     */
    return Math.sign(firstPokemon.id - secondPokemon.id);
  };

  /**
   * Following a functional programming principle here which states that
   * we should not mutate objects in any way.
   *
   * Refer this : https://www.learningjournal.guru/article/scala/functional-programming/immutability-in-functional-programming/
   */
  const sortedPokemonList = pokemonList.sort(pokemonComparator);

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3">
      {sortedPokemonList
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}

export default CardList;
