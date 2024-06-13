import React, { useRef, useState } from "react";
import OptionsMenu from "../../core/optionsMenu/OptionsMenu";
import useOutsideClickHandler from "../../core/useOutsideClickHandler/useOutsideClickHandler";
import FilterComponent from "../../../assets/svgs/filterImage";
import "./ResultFilter.css";

function ResultFilter({
  results,
  resultFilter,
  handleResultChange,
}) {
  const resultFilterRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterComponentClick = () => {
    setShowFilter(!showFilter);
  };

  const handleOutsideClick = () => {
    setShowFilter(false);
  };

  useOutsideClickHandler({
    ref: resultFilterRef,
    outsideClickHandler: handleOutsideClick,
  });

  return (
    <div className="result-filter" ref={resultFilterRef}>
      <FilterComponent
        className='filter'
        onClick={handleFilterComponentClick}
      />
      {showFilter && (
        <div className='result-filter-menu'>
          <OptionsMenu
            id="dashBoardResultFilter"
            options={results}
            handleCheckbox={handleResultChange}
            selectedOptions={resultFilter}
          />
        </div>
      )}
    </div>
  );
}

export default ResultFilter;
