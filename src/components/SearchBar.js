import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <TextField label="Search by Name" variant="outlined" fullWidth onChange={handleSearch} />
  );
};

export default SearchBar;
