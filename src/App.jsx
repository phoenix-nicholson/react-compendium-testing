import './App.css';
import { getPokemon } from './services/api';
import { useEffect, useState } from 'react';
import PokeCard from './components/Poke/PokeCard';
import Control from './components/Control/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon([...data.results]);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [query, order, page, loading]);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Control setLoading={setLoading} setQuery={setQuery} setOrder={setOrder} order={order} />
      <PokeCard pokemon={pokemon} setPage={setPage} setLoading={setLoading} />
    </div>
  );
}

export default App;
