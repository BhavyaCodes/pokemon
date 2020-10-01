import React from "react";

function PokemonType({ type }) {
  const getClassName = () => {
    if (type === "normal") {
      return "badge badge-pill badge-secondary mx-1";
    } else if (type === "fighting") {
      return "badge badge-pill badge-secondary mx-1";
    } else if (type === "flying ") {
      return "badge badge-pill badge-info mx-1";
    } else if (type === "poison") {
      return "badge badge-pill badge-warning mx-1";
    } else if (type === "ground") {
      return "badge badge-pill badge-secondary mx-1";
    } else if (type === "rock") {
      return "badge badge-pill badge-secondary mx-1";
    } else if (type === "ghost") {
      return "badge badge-pill badge-dark mx-1";
    } else if (type === "steel") {
      return "badge badge-pill badge-secondary mx-1";
    } else if (type === "fire") {
      return "badge badge-pill badge-danger mx-1";
    } else if (type === "water") {
      return "badge badge-pill badge-primary mx-1";
    } else if (type === "grass") {
      return "badge badge-pill badge-success mx-1";
    } else if (type === "electric") {
      return "badge badge-pill badge-warning mx-1";
    } else if (type === "psychic") {
      return "badge badge-pill badge-light mx-1";
    } else if (type === "dragon") {
      return "badge badge-pill badge-danger mx-1";
    } else if (type === "dark") {
      return "badge badge-pill badge-dark mx-1";
    } else if (type === "unknown") {
      return "badge badge-pill badge-light mx-1";
    } else if (type === "shadow") {
      return "badge badge-pill badge-dark mx-1";
    } else {
      return "badge badge-pill badge-info mx-1";
    }
  };

  if (!type) {
    return null;
  }
  return <span className={getClassName()}>{type}</span>;
}

export default PokemonType;
