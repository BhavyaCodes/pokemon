import React from "react";

const pokeTypes = {
    normal: "badge-secondary",
    fighting: "badge-secondary",
    flying: "badge-info",
    poison: "badge-warning",
    ground: "badge-secondary",
    rock: "badge-secondary",
    ghost: "badge-dark",
    steel: "badge-secondary",
    fire: "badge-danger",
    water: "badge-primary",
    grass: "badge-success",
    electric: "badge-warning",
    psychic: "badge-light",
    dragon: "badge-danger",
    dark: "badge-dark",
    unknown: "badge-light",
    shadow: "badge-dark",

}
function PokemonType({ type }) {
    const getClassName = () => {
        const badge = pokeTypes.hasOwnProperty(type) ? pokeTypes[type] : "badge-info";
        return `badge badge-pill ${badge} mx-1`;
    };

    if (!type) {
        return null;
    }
    return <span className={getClassName()}>{type}</span>;
}

export default PokemonType;
