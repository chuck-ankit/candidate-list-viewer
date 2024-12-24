import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Name or Skills"
      className="w-full p-3 border border-diesel-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-diesel-500 mb-12"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
