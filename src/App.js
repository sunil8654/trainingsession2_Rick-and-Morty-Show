import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import SortDropdown from './components/SortDropdown';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ species: [], gender: [], origin: [] });
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredCharacters = characters
    .filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((char) => filters.species.length === 0 || filters.species.includes(char.species))
    .filter((char) => filters.gender.length === 0 || filters.gender.includes(char.gender))
    .filter((char) => filters.origin.length === 0 || filters.origin.includes(char.origin.name))
    .sort((a, b) => sortOrder === 'asc' ? a.id - b.id : b.id - a.id);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" align="center">
          Rick and Morty task
        </Typography>
      </Box>
      <Box my={2}>
        <SearchBar onSearch={setSearchTerm} />
      </Box>
      <Box my={2}>
        <SortDropdown onSort={setSortOrder} />
      </Box>
      <Box my={2}>
        <Filter filters={filters} setFilters={setFilters} />
      </Box>
      <Grid container spacing={3}>
        {filteredCharacters.map((char) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
            <CharacterCard character={char} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
