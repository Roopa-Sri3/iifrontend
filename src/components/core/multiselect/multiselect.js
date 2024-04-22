import React, { useState } from 'react';
import OptionItem from './option-item';

const MultiSelect = ({
  id,
  label,
  options,
  checked,
  onChange,
})=>{
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchItem,setSearchItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) =>{
    setSearchItem(event.target.value);
  };

  const handleCheckbox = (option) => {
    handleOptionClick(option);
  };

  const handleOptionClick = (option) = {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions,option]);
    }
  };

  const filterOptions = options.filter(option => option.includes(searchItem));

  return (
    <div className="drop-box">
      <div className="drop-box-header" onClick={toggleMenu}>
        {label} <span className="drop-box-icon">{isMenuOpen ? '<' : '>'}</span>
      </div>
      {isMenuOpen && (
        <div className='drop-box-menu'>
          <input
            type="text"
            value="searchItem"
            onChange={handleSearchChange}
          />
          {filterOptions.map(option=>(
            <OptionItem
            key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
              checked={selectedOptions.includes(option)}
              onChange={()=>{handleCheckbox(option)}}
            />
          ))}
        </div>
      )}
      <div>
        {selectedOptions.map(option => (
          <div key={option.id} className="selected-option">
            {option.label}
            <span
              className="deselect-option"
              onClick = {() => handleOptionClick(option)}
            >
              *
            </span>
          </div>
        ))}
      </div>
    </div>    
  );
};

export default MultiSelect;