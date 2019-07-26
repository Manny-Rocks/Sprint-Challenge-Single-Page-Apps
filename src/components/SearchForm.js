import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: "",
    species: ''
  })
  const handleInputChange = (event) => {console.log('oh boy', query)
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input className='nameHere'
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <input className='speciesHere'
          onChange={handleInputChange}
          placeholder="species"
          value={query.species}
          name="species"
        />
        <button className="btn" type="submit">YOU READY!?</button>
      </form>
    </section>
  );
}
