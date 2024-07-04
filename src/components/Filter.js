import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Box, Typography, Paper } from '@mui/material';

const speciesOptions = ['Human', 'Mytholog', 'Other Species'];
const genderOptions = ['Male', 'Female'];
const originOptions = ['unknown', 'Post-Apocalyptic Earth', 'Nuptia 4', 'Others'];

const Filter = ({ filters, setFilters }) => {
  const handleSpeciesChange = (event) => {
    const { checked, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      species: checked ? [...prevFilters.species, value] : prevFilters.species.filter((item) => item !== value),
    }));
  };

  const handleGenderChange = (event) => {
    const { checked, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: checked ? [...prevFilters.gender, value] : prevFilters.gender.filter((item) => item !== value),
    }));
  };

  const handleOriginChange = (event) => {
    const { checked, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      origin: checked ? [...prevFilters.origin, value] : prevFilters.origin.filter((item) => item !== value),
    }));
  };

  return (
    <Box>
      <Typography variant="h6" component="h2" mb={2} sx={{ fontWeight: 'bold', fontSize: '50px', marginTop: '-70px' }}
      >
        Filter
      </Typography>
      <Paper elevation={1}sx={{ padding: 2, marginBottom: 3, backgroundColor: '#e9e7e7' }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ fontWeight: 'bold', fontSize: '30px' }}>Species</FormLabel>
          <FormGroup>
            {speciesOptions.map((option) => (
              <FormControlLabel
                control={<Checkbox checked={filters.species.includes(option)} onChange={handleSpeciesChange} value={option} />}
                label={option}
                key={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
      <Paper elevation={1} sx={{ p: 2, mb: 3 , backgroundColor: '#e9e7e7'}}>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ fontWeight: 'bold', fontSize: '30px' }}>Gender</FormLabel>
          <FormGroup>
            {genderOptions.map((option) => (
              <FormControlLabel
                control={<Checkbox checked={filters.gender.includes(option)} onChange={handleGenderChange} value={option} />}
                label={option}
                key={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
      <Paper elevation={1} sx={{ p: 2, mb: 3 , backgroundColor: '#e9e7e7'}}>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ fontWeight: 'bold', fontSize: '30px' }}>Origin</FormLabel>
          <FormGroup>
            {originOptions.map((option) => (
              <FormControlLabel
                control={<Checkbox checked={filters.origin.includes(option)} onChange={handleOriginChange} value={option} />}
                label={option}
                key={option}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Filter;
