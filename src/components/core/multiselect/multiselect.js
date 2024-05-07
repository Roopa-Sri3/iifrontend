import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import OptionItem from './option-item';
import ChevronRight from '../../assets/svgs/ChevronRight';
import DeSelect from '../../assets/svgs/DeSelect';
import Search from '../../assets/svgs/Search';
import './multiselect.css';

const MultiSelect = ({
  id,
  label,
  options = [],
  className,
  onChange,
  selectedValues = [],
  maxSelection,
  initialDisabledOptions = [],
  disabled = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const dropboxRef = useRef(null);

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

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleOptionClick = (option) => {

    let updatedSelectedOptions;

    if (selectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value) !== -1) {
      updatedSelectedOptions = selectedOptions.filter(
        (eachOption) => eachOption.value !== option.value
      );
    } else {
      if (selectedOptions.length < maxSelection) {
        updatedSelectedOptions = [...selectedOptions, option];
      } else {
        updatedSelectedOptions = selectedOptions;
      }
    }

    setSelectedOptions(updatedSelectedOptions);
    setSearchItem('');
    onChange(updatedSelectedOptions);
  };

  const handleCheckbox = (option, isChecked) => {
    handleOptionClick(option, isChecked);
  };

  const handleOutsideClick = (event) => {
    if (dropboxRef.current && !dropboxRef.current.contains(event.target)) {
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

  const filterOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchItem.toLowerCase()));

  const disabledOptions = selectedOptions.length >= maxSelection ?
    options.filter(
      option => !selectedOptions.find(
        selectedOption => selectedOption.value === option.value
      ))
    : [];

  return (
    <div className="drop-box" ref={dropboxRef}>
      <div className={cx(
        'drop-box-header',
        className,
        disabled ? 'disabled' : ''
      )}
      role="button"
      tabIndex="0"
      onClick={handleMouseClick}
      onKeyDown={handleKeyDown}
      >
        <div className="selected-options">
          {selectedOptions && selectedOptions.map((option) => (
            <div key={option.value} className="selected-option">
              {option.label}
              <span className="deselect-option"
                role="button"
                tabIndex="0"
                onClick={() => handleOptionClick(option)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    handleOptionClick(option);
                  }
                }}
              >
                {selectedOptions.includes(option) && (<DeSelect />)}
              </span>
            </div>
          ))}
        </div>
        {label}
        <span className="drop-box-icon">
          {<ChevronRight />}
        </span>
      </div>
      {isMenuOpen && (
        <div className='drop-box-menu'>
          <div className='search-section'>
            <input
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={handleSearchChange}
            />
            <div className='multiselect-search-icon'>
              <Search />
            </div>
          </div>
          <div className="options-menu">
            {filterOptions.map(option => (
              <OptionItem
                key={option.id}
                id={`${id}_option_${option.value}`}
                label={option.label}
                value={option.value}
                checked={selectedOptions.some(
                  (eachOption) => eachOption.value === option.value)
                }
                onChange={(e) => { handleCheckbox(option, e.target.checked); }}
                disabled={disabledOptions.some(
                  disabledOption => disabledOption.value === option.value)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

