import './App.css';
import { getPokemon } from './services/api';
import { useEffect, useState } from 'react';
import PokeCard from './components/Poke/PokeCard';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon([...data.results]);
    };
    fetchData();
  }, [query, order, page]);
  return (
    <div className="App">
      <PokeCard pokemon={pokemon} setPage={setPage} />
    </div>
  );
}

export default App;
