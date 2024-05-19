import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles'; // Import makeStyles from @mui/styles

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="div">
          Art Gallery
        </Typography>
        <div>
          <Button color="inherit" component={RouterLink} to="/view-purchase-details" className={classes.linkButton}>
            View Purchase Details
          </Button>
          <Button color="inherit" component={RouterLink} to="/add-art-details" className={classes.linkButton}>
            Art Details
          </Button>
          <Button color="inherit" component={RouterLink} to="/view-profile" className={classes.linkButton}>
            View Profile
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
