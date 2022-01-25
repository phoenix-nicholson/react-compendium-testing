import React from 'react';

export default function PokeCard({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          {poke.pokemon}
          <span> Type:{poke.type_1} </span>
          <img src={poke.url_image}></img>
          <span>HP:{poke.hp} </span>
          <span>ATK:{poke.attack} </span>
          <span>DEF:{poke.defense} </span>
        </div>
      ))}
    </div>
  );
}
