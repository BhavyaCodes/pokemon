import React from "react";
import "../assets/css/badgeStyles.css";

import pokemonTypeToClassname from "../constants/pokemonTypeToClassname";

function PokemonType({ type }) {
  const getClassName = () => {
    return pokemonTypeToClassname[type] || "badge badge-pill badge-info mx-1";
  };

  if (!type) {
    return null;
  }
  return (
    <span data-testid={`pokemon-type-${type}`} className={getClassName()}>
      {type}
    </span>
  );
}

export default PokemonType;
