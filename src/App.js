import React, { useState, useEffect } from 'react';
import PokemonCards from './components/PokemonCards';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState( "https://pokeapi.co/api/v2/pokemon?limit=20" );
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setPokemons( currentList => [...currentList, data] );
        await pokemons.sort( ( a, b ) => a.id - b.id );
        console.log(data);
      })
    }
    createPokemonObject(data.results)
  }

  /* useEffect( () => {
    getAllPokemons();
  }, [] ); */
  
  return (
    <div className="app-container">
      <h1 className='title'>Pokemons Evolution</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {pokemons.map( (pokemonStats, index) =>
            <PokemonCards 
              id={pokemonStats.id}
              name={pokemonStats.name}
              image={pokemonStats.sprites.other.dream_world.front_default}
              type={pokemonStats.types[0].type.name}
              hp={pokemonStats.stats[0].base_stat}
              attack={pokemonStats.stats[1].base_stat}
              defense={pokemonStats.stats[2].base_stat}
              sAtt={pokemonStats.stats[3].base_stat}
              sDef={pokemonStats.stats[4].base_stat}
              speed={pokemonStats.stats[5].base_stat}
              height={pokemonStats.height}
              weight={pokemonStats.weight}
              key={index}
            />
          )}
        </div>
        <div className='btn-container'>
          <button className='btn-load' onClick={()=> getAllPokemons()}>Load More</button>
        <button className='btn-reset' onClick={()=> setPokemons([])}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
