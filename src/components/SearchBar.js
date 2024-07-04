import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box>
      <TextField 
        label="Search by Name" 
        variant="outlined" 
        fullWidth 
        onChange={handleSearch} 
        sx={{ width: '100%' }} 
      />
    </Box>
  );
};

export default SearchBar;
