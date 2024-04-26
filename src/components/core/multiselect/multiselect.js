import React, { useState, useRef, useEffect } from 'react';
import OptionItem from './option-item';
import ChevronRight from '../../assets/svgs/ChevronRight';
import DeSelect from '../../assets/svgs/DeSelect';
import './multiselect.css';

const MultiSelect = ({
  id,
  label,
  options,
  checked,
  onChange,
  getValues = [],
  setValues = [],
  selectedValues,
}) => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchItem,setSearchItem] = useState('');
  const dropboxRef = useRef(null);

  useEffect(() => {
    if(selectedValues){
      setSelectedOptions(selectedValues);
    }}, [selectedValues]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseClick = () => {
    toggleMenu();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === " ") {
      toggleMenu();
    }
  };

  const handleTouch = () => {
    toggleMenu();
  };

  const handleSearchChange = (event) =>{
    setSearchItem(event.target.value);
  };

  const handleCheckbox = (option) => {
    handleOptionClick(option);
  };

  const handleOutsideClick = (event) => {
    if(dropboxRef.current && !dropboxRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setSearchItem('');
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option) => {
    const updatedSelectedOptions = Array.isArray(selectedOptions) &&
    selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions,option];
    setSelectedOptions(updatedSelectedOptions);
    setSearchItem('');
    onChange(updatedSelectedOptions);
  };

  const filterOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div className="drop-box" ref={dropboxRef}>
      <div className={`drop-box-header 
      ${isMenuOpen ? 'grey-border' : 'red-color'}`}
      role="button"
      tabIndex="0"
      onClick={handleMouseClick}
      onKeyDown={handleKeyDown}
      onTouch={handleTouch}
      >
        <div className="selected-options">
          {selectedOptions && selectedOptions.map(option => (
            <div key={option.id} className="selected-option">
              {option.label}
              <span className="deselect-option"
                role="button"
                tabIndex="0"
                onClick = {() => handleOptionClick(option)}
                onKeyDown={(event) => {
                  if(event.key === "Enter" || event.key === " "){
                    handleOptionClick(option);
                  }
                }}
              >
                {selectedOptions.includes(option) && (<DeSelect/>)}
              </span>
            </div>
          ))}
        </div>
        {label} <span className="drop-box-icon">
          {<ChevronRight />}
        </span>
      </div>
      {isMenuOpen && (
        <div className='drop-box-menu'>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleSearchChange}
          />
          <div className="options-menu">
            {filterOptions.map(option=>(
              <OptionItem
                key={option.id}
                id={option.id}
                label={option.label}
                value={option.value}
                checked={selectedOptions.includes(option)}
                onChange={() => {handleCheckbox(option);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
