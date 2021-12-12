import React from 'react';
import Button from '@mui/material/Button';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-items">
      <Button> 
        Home
      </Button>
      <Button> 
        My rooms
      </Button>
      </div>
    </header>
  );
};

export default Header;