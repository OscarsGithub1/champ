import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // Perform search or any other actions with the search term
    console.log('Search term:', event.target.value);
  };

  return (
    <div className="searchBox">
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder= "Search..."
      />
    </div>
  );
};

export default SearchBox;
