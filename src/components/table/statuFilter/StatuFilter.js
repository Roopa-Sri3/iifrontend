import React, { useRef, useState } from "react";
import OptionsMenu from "../../core/optionsMenu/OptionsMenu";
import FilterComponent from "../../../assets/svgs/filterImage";
import "./StatuFilter.css";
import useOutsideClickHandler from "../../core/useOutsideClickHandler/useOutsideClickHandler";

function StatuFilter({
  statuses,
  statusFilter,
  handleCheckboxChange,
}) {
  const statusFilterRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterComponentClick = () => {
    setShowFilter(!showFilter);
  };

  const handleOutsideClick = () => {
    setShowFilter(false);
  };

  useOutsideClickHandler({
    ref: statusFilterRef,
    outsideClickHandler: handleOutsideClick, // Set the state to false.
  });

  return (
    <div className="status-filter" ref={statusFilterRef}>
      <FilterComponent
        className='filter'
        onClick={handleFilterComponentClick}
      />
      {showFilter && (
        <div className='status-filter-menu'>
          <OptionsMenu
            id="dashBoardStatusFilter"
            options={statuses}
            handleCheckbox={handleCheckboxChange}
            selectedOptions={statusFilter}
          />
        </div>
      )}
    </div>
  );
}

export default StatuFilter;
