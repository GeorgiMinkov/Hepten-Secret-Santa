import React from 'react';  
import './Home.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div className="container">
      <div className="accent-title">
      <Typography  variant="h1">
        Hepten Secret Santa
      </Typography>
      </div>
      <Button variant="outlined" >
        Create room
      </Button>
      <Button variant="outlined"> 
        Enter room
      </Button>
      <Button>
        How does it work
      </Button>
    </div>
  );
};

export default Header;