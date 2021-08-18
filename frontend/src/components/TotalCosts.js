import React from 'react';

const TotalCosts = ({ heading, total = 0, costs, show }) => {
  let costsDetails = costs
    ? costs.map((el) => {
        return (
          <li key={Math.random()}>
            <span>{el.description}</span>
            <span>{el.price}</span>
          </li>
        );
      })
    : null;

  return (
    <>
      <h1>
        {heading.toUpperCase()} {total}€
      </h1>
      <ul>{show && costsDetails}</ul>
    </>
  );
};

export default TotalCosts;
