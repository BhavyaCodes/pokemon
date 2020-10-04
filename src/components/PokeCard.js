import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonType from "./PokemonType";

function PokeCard({ pokemon }) {
  const [image, setImage] = useState();
  const [types, setTypes] = useState();
  const name = pokemon.name;

  const renderTypes = () => {
    if (types) {
      return types.map((type, idx) => {
        return <PokemonType key={idx} type={type.type.name} />;
      });
    }
  };
  useEffect(() => {
    axios.get(pokemon.url).then(({ data }) => {
      setTypes(data.types);
      setImage(data.sprites.front_default);
    });
  }, [pokemon.url]);

  return (
    <div className="col mb-4">
      <div className="card" tabIndex={0}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center">{renderTypes()}</p>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
