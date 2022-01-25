import './App.css';
import { getPokemon } from './services/api';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      console.log(data);

      setPokemon(data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
