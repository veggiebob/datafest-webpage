import React, { useState } from 'react';

function CheckboxList({ options, onChange }) {
  const [checkedValues, setCheckedValues] = useState([]);

  function handleCheckboxChange(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedValues = checkedValues.slice(); // create a copy of the checked values array

    if (isChecked) {
      newCheckedValues.push(value);
    } else {
      newCheckedValues = newCheckedValues.filter(v => v !== value);
    }

    setCheckedValues(newCheckedValues);
    onChange(newCheckedValues);
  }

  return (
    <div>
      {options.map(option => (
        <label key={option}>
          <input 
            type="checkbox" 
            value={option}
            checked={checkedValues.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxList;