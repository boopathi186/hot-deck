import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
    <div className="w-100 p-3 mt-3 position-relative">
      <i className="search bi bi-search text-secondary fs-3"></i>
      <input
        className='searchbar w-100 ps-5 shadow-sm rounded-4 border-0 p-3'
        onChange={handleSearch}
        type="text"
        value={searchTerm}
        placeholder="Search for names..."
        title="Type in a name"
      />
    </div>
  );
};

export default SearchBar;
