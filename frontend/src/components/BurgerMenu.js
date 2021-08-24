import React from 'react';

const BurgerMenu = ({ title, onClick }) => {
  return (
    <div className='headBurger'>
      <div className='burgerMenu' onClick={onClick}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default BurgerMenu;
