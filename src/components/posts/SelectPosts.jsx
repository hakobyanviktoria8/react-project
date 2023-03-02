import React from "react";

export const SelectPosts = ({ val, onChange, optins }) => {
  return (
    <select value={val} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        Select value
      </option>
      {optins.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
