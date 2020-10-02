import React from "react";
import PokemonType from "./PokemonType";

function PokeCard({ pokemon }) {
  const renderTypes = () => {
    if (pokemon.types) {
      return pokemon.types.map((type) => {
        return <PokemonType key={type} type={type} />;
      });
    }
  };

  return (
    <div className="col mb-4">
      <div className="card" tabIndex={0}>
        <img
          src={pokemon.imageUrl}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{pokemon.name}</h5>
          <p className="card-text text-center">{renderTypes()}</p>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
