import React, { useState } from "react";
import pokemonList from "../pokemon.json";
import PokeCard from "./PokeCard";
import Pagination from "./pagination";

function CardList({ searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);

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
  const filteredSortedPokemonList = sortedPokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="row row-cols-1 row-cols-md-3 mt-3">
        {filteredSortedPokemonList
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        totalData={filteredSortedPokemonList.length}
      />
    </React.Fragment>
  );
}

export default CardList;
