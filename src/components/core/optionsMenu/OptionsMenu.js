import React from "react";
import OptionItem from "../optionItem/OptionItem";

function OptionsMenu({
  id,
  options = [],
  selectedOptions = [],
  disabledOptions = [],
  handleCheckbox = () => {},
}) {
  return (
    <>
      {options.map((option) => (
        <OptionItem
          key={option.value}
          id={`${id}_option_${option.value}`}
          label={option.label}
          value={option.value}
          checked={selectedOptions.some(
            (eachOption) => eachOption.value === option.value)
          }
          onChange={(e) => { handleCheckbox(option, e.target.checked); }}
          disabled={disabledOptions.some(
            (disabledOption) => disabledOption.value === option.value)}
        />
      ))}
    </>
  );
}

export default OptionsMenu;
