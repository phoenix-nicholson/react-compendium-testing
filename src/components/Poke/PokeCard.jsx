import React from 'react';

export default function PokeCard({ pokemon }) {
  return (
    <div>
      <ul>
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <li>
              {poke.pokemon}
              <span> Type:{poke.type_1} </span>
              <img src={poke.url_image}></img>
              <span>HP:{poke.hp} </span>
              <span>ATK:{poke.attack} </span>
              <span>DEF:{poke.defense} </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
