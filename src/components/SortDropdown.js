import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortDropdown = ({ onSort }) => {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Sort by ID</InputLabel>
      <Select label="Sort by ID" onChange={handleSortChange}>
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
