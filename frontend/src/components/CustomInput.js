import React from 'react';

const CustomInput = ({ type, handleChange, placeholder, name, value }) => {
  return (
    <div className='CustomInput'>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default CustomInput;
