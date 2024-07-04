import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const SortDropdown = ({ onSort }) => {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <Box>
      <FormControl variant="outlined" fullWidth sx={{ maxwidth: '100%' , minwidth: '215px' }}>
        <InputLabel>Sort by ID</InputLabel>
        <Select label="Sort by ID" onChange={handleSortChange}>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortDropdown;
