import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from '../SearchForm';

export default function CharacterList(props) {
    const [characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => {
                console.log('GUUD', res.data.results);
                setCharacters(res.data.results)
            })
            .catch(error => {
                console.error('OH NOES', error)
            })
    },[]);
    function onSearch(query) {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
        .then(res => {
          setCharacters(res.data.results);
          console.log('GUUD yay', res.data.results)
        })
        .catch(error => {
          console.log('ruh roh',error)
        });
    }
  return (
    <section className='character-list grid-view'>
      <SearchForm onSearch={onSearch}/>
     {characters.map(character => (
              <CharacterCard 
              img={character.image}
              species={character.species}
              name={character.name}
              status={character.status}
              origin={character.origin.name}
              number={character.id}
              gender={character.gender} />
            ))}
    </section>
  );
}