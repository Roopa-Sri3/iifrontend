import React, { useRef } from "react";
import OptionsMenu from "../../core/optionsMenu/OptionsMenu";
import FilterComponent from "../../../assets/svgs/filterImage";
import "./StatuFilter.css";
import useOutsideClickHandler from "../../core/useOutsideClickHandler/useOutsideClickHandler";

function StatuFilter({
  showFilter, // Not from prop
  statuses,
  statusFilter,
  handleCheckboxChange,
  handleFilterComponentClick, // Not from prop
}) {
  const statusFilterRef = useRef(null);
  // Move the state to here.

  useOutsideClickHandler({
    ref: statusFilterRef,
    outsideClickHandler: handleFilterComponentClick, // Set the state to false.
  });

  return (
    <div className="statsu-filter" ref={statusFilterRef}>
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
