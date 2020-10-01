import React from "react";

function PokemonType({type}) {
    const getClassName = () => {
        const pokemonTypes = {
            "normal": "badge badge-pill badge-secondary mx-1",
            "fighting": "badge badge-pill badge-secondary mx-1",
            "flying": "badge badge-pill badge-info mx-1",
            "poison": "badge badge-pill badge-warning mx-1",
            "ground": "badge badge-pill badge-secondary mx-1",
            "rock": "badge badge-pill badge-secondary mx-1",
            "ghost": "badge badge-pill badge-dark mx-1",
            "steel": "badge badge-pill badge-secondary mx-1",
            "fire": "badge badge-pill badge-danger mx-1",
            "water": "badge badge-pill badge-primary mx-1",
            "grass": "badge badge-pill badge-success mx-1",
            "electric": "badge badge-pill badge-warning mx-1",
            "psychic": "badge badge-pill badge-light mx-1",
            "dragon": "badge badge-pill badge-danger mx-1",
            "dark": "badge badge-pill badge-dark mx-1",
            "unknown": "badge badge-pill badge-light mx-1",
            "shadow": "badge badge-pill badge-dark mx-1"
        }
        return pokemonTypes[type] ? pokemonTypes[type] : "badge badge-pill badge-info mx-1";
    };

    if (!type) {
        return null;
    }
    return <span className={getClassName()}>{type}</span>;
}

export default PokemonType;
