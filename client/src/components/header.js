import React from 'react';
import { Typography } from '@material-ui/core';

const Header = ({ title }) => {
  return (
    <header style={{ marginBottom: 20 }}>
      <Typography  variant="h3" component="h1" style={{ fontFamily: 'Verdana', color: 'black',background: 'lightgrey' }}>
        {title}
      </Typography>
    </header>
  );
};

export default Header;
