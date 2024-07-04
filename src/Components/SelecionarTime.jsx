import React, { useState } from 'react';

const TeamSelect = ({ label, options, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <select onChange={handleChange}>
        {options.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TeamSelect;




