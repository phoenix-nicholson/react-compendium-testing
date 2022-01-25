export async function getPokemon(query, order, page, selectedType) {
  const param = new URLSearchParams();
  param.set('pokemon', query);
  param.set('sort', 'pokemon');
  param.set('direction', order);
  param.set('page', page);

  if (selectedType !== 'all') {
    param.set('type', selectedType);
  }

  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await response.json();
  console.log(data);

  return data;
}
