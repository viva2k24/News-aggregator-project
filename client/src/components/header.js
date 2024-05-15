import React from 'react';
import { Typography } from '@material-ui/core';

const Header = ({ title }) => {
  return (
    <header style={{ marginBottom: 20 }}>
      <Typography  variant="h1" component="h1" style={{ fontFamily: 'sans-serif', color: 'black',background: 'white', textAlign: 'center' }}>
        {title}
      </Typography>
    </header>
  );
};

export default Header;
