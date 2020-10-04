import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import { getOriginalPokemon } from "./PokeApi";
import axios from "axios";

/**
 * Following a functional programming principle here which states that
 * we should not mutate objects in any way.
 *
 * Refer this : https://www.learningjournal.guru/article/scala/functional-programming/immutability-in-functional-programming/
 */

function CardList({ searchQuery }) {
  const [originalPokemon, setOriginalPokemon] = useState([]);

  // assigns the result of the pokemon query to originalPokemon state when the component mounts
  useEffect(() => {
    axios
      .get(getOriginalPokemon)
      .then(({ data }) => setOriginalPokemon(data.results));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3">
      {originalPokemon
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((pokemon, idx) => (
          <PokeCard key={idx} pokemon={pokemon} />
        ))}
    </div>
  );
}

export default CardList;
