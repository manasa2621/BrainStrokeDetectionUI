// Import makeStyles from @mui/styles instead of @mui/material/styles
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardActions } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: 20, // Use a fixed value for margin-top (e.g., 20px)
    padding: 16, // Use a fixed value for padding (e.g., 16px)
  },
  card: {
    marginBottom: 16, // Use a fixed value for margin-bottom between cards (e.g., 16px)
  },
  addButton: {
    marginBottom: 20, // Use a fixed value for margin-bottom for the Add New Art button (e.g., 20px)
  },
});

const ArtDetailsPage = () => {
  const classes = useStyles();
  const [arts, setArts] = useState([]);

  useEffect(() => {
    // Simulated arts data (replace with actual data fetching from API)
    const mockArts = [
      { id: 1, title: 'Painting 1', artist: 'Artist A', price: '$100' },
      { id: 2, title: 'Sculpture 1', artist: 'Artist B', price: '$200' },
      { id: 3, title: 'Photography 1', artist: 'Artist C', price: '$150' },
    ];
    setArts(mockArts);
  }, []); // Empty dependency array to run only once on initial render

  const handleDelete = (id) => {
    // Simulated delete action (replace with actual API call)
    const updatedArts = arts.filter((art) => art.id !== id);
    setArts(updatedArts);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/admin-home"
        className={classes.addButton}
      >
        Add New Art
      </Button>
      <Typography variant="h5" gutterBottom>
        Art Details
      </Typography>
      {arts.map((art) => (
        <Card key={art.id} className={classes.card}>
          <CardContent>
            <Typography variant="h6">{art.title}</Typography>
            <Typography variant="body2">Artist: {art.artist}</Typography>
            <Typography variant="body2">Price: {art.price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Update
            </Button>
            <Button size="small" color="secondary" onClick={() => handleDelete(art.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ArtDetailsPage;
