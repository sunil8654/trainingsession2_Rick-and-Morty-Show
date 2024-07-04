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
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

const FilterContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: '15px',
  paddingRight: '15px',
  borderRight: 'none',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '20%',
  },
}));

const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '80%',
  },
}));

const SearchBarContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(1),
  maxWidth: '60%',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '50%',
  },
}));

const SortDropdownContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  marginLeft: theme.spacing(1),
  maxWidth: '30%',
  padding: '12.5px 15px',
  minWidth: '150px',
  width: '100%',
}));

const SelectedFiltersContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

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

  const renderSelectedFilters = () => {
    const selectedFilters = [];

    Object.keys(filters).forEach((filterKey) => {
      filters[filterKey].forEach((filterValue) => {
        selectedFilters.push(
          <Chip label={`${filterKey}: ${filterValue}`} key={`${filterKey}-${filterValue}`} />
        );
      });
    });

    return selectedFilters;
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box my={4}>
        <Typography variant="h3" component="h1" align="center">
          Rick and Morty Task
        </Typography>
      </Box>
      <Grid container>
        <FilterContainer item xs={12} sm={4} md={3} lg={2}>
          <Box my={2}>
            <Filter filters={filters} setFilters={setFilters} />
          </Box>
        </FilterContainer>
        <MainContainer item xs={12} sm={8} md={9} lg={10}>
          <SelectedFiltersContainer>
            {renderSelectedFilters()}
          </SelectedFiltersContainer>
          <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <SearchBarContainer>
              <SearchBar onSearch={setSearchTerm} />
            </SearchBarContainer>
            <SortDropdownContainer>
              <SortDropdown onSort={setSortOrder} />
            </SortDropdownContainer>
          </Box>
          <Grid container spacing={3}>
            {filteredCharacters.map((char) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
                <CharacterCard character={char} />
              </Grid>
            ))}
          </Grid>
        </MainContainer>
      </Grid>
    </Container>
  );
};

export default App;
