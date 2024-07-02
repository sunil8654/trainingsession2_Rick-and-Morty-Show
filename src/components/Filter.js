import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const speciesOptions = ['Human', 'Mytholog', 'Other Species'];
const genderOptions = ['Male', 'Female'];
const originOptions = ['unknown', 'Post-Apocalyptic Earth', 'Nuptia 4', 'Earth (Giant Telepathic Spiders Dimension)'];

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
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Species</FormLabel>
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Origin</FormLabel>
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
    </div>
  );
};

export default Filter;
