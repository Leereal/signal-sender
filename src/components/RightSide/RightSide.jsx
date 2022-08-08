import { Button } from '@mui/material';
import React from 'react';
import Subscribe from '../Subscribe/Subscribe';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
  return (
    <div className="RightSide">      
      <h3>Subscribe</h3>
      <Subscribe />
      <h3>Updates</h3>
      <Updates />
    </div>
  );
};

export default RightSide;
