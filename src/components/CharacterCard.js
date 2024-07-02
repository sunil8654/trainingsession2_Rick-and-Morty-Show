import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const CharacterCard = ({ character }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '95%' }}>
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt={character.name}
      />
      <CardContent sx={{ backgroundColor: '#f6ffd2a6', textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {character.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {character.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {character.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Origin: {character.origin.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
