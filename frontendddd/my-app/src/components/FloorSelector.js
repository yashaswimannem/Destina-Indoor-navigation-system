// FloorSelector.js
import React from 'react';

const FloorSelector = ({ selectedFloor, setSelectedFloor }) => {
  return (
    <select value={selectedFloor} onChange={(e) => setSelectedFloor(e.target.value)}>
      <option value="LG">Lower Ground</option>
      <option value="UG">Upper Ground</option>
    </select>
  );
};

export default FloorSelector;
