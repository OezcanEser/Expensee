import React from 'react';

const Price = ({
  backgroundColor,
  description,
  created_at,
  price,
  onClick,
}) => {
  return (
    <li>
      <div
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          backgroundColor: { backgroundColor },
        }}
      />
      <article>
        <h4>{description}</h4>
        <p>
          {new Date(created_at).toLocaleDateString('de', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
      </article>
      <p className='price'>{price.toFixed(2)}</p>
      <img
        src='./img/delete.png'
        alt='delete'
        style={{ height: '25px' }}
        onClick={onClick}
      />
    </li>
  );
};

export default Price;
