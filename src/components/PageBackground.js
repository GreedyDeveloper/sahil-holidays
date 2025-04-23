import React from 'react';
import './PageBackground.css';

const PageBackground = () => {
  return (
    <div className='page-background-container'>
      <div className='page-background-dark' />
      <div className='page-background-light' />
    </div>
  );
};

export default PageBackground;