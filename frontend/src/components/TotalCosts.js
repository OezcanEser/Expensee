import React from 'react';

const TotalCosts = ({ heading, total, costs, show }) => {
  let costsDetails = costs
    ? costs.map((el) => {
        return (
          <li key={Math.random()}>
            <span>{el.description}</span>
            <span>{el.price.toFixed(2)} €</span>
          </li>
        );
      })
    : null;

  return (
    <>
      <h3 className=''>
        {heading.toUpperCase(1).slice(0, 1) + heading.slice(1)}: {total} €
      </h3>
      <ul>{show && costsDetails}</ul>
    </>
  );
};

export default TotalCosts;
