import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/core/button/button";
import SubFooter from "../components/table/SubFooter/SubFooter";
import SubHeader from "../components/table/SubHeader/SubHeader";
import SubLayout from "../components/table/SubLayout/SubLayout";
import UserDisplay from "../components/UserDisplay/UserDisplay";
import
AddCandidateModal
  from "../components/modals/addCandidateModal/AddCandidateModal";
import FeedbackModal from "../components/modals/feedbackModal/FeedbackModal";
import { openModal, } from "../store/reducers/app/app";
import {
  AddCandidate,
  EditCandidate,
  GetTechSkills,
} from "../store/reducers/dashboard/dashboard.js";
import { GetUserRole } from "../store/selector/app";
import { candidates, statuses } from "../shared/constants";
import Search from "../components/assets/svgs/Search";
import AddIcon from "../components/assets/svgs/AddIcon.js";
import "./Dashboard.css";
import StatuFilter from "../components/table/statuFilter/StatuFilter.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  // Reed the page records from store.

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); // Remove it from state.
  const [showFilter, setShowFilter] = useState(false); // Move it to StatuFilter component.
  const [selectedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState([]);

  useEffect(() => {
    dispatch(GetTechSkills({
      onSuccess: () => {},
      onError: () => {},
    }));
  }, [dispatch]);

  const fetchCurrentPageRecords = ({
    pageNO = 1,
  }) => {
    console.log({
      pageNO,
      searchTerm,
      statusFilter
    });
  };

  // useEffect(() => {
  //   /**
  //    * seach,
  //    * status,
  //    * pageNO
  //    * Call Action creator whichj internally calls API.
  //    */
  //   fetchCurrentPageRecords();

  // }, [statusFilter, searchTerm]);

  const filteredCandidates = candidates.filter(
    (candidate) =>
      (!selectedStatus || candidate.status === selectedStatus) &&
      (candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
      || candidate.techSkills.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchCurrentPageRecords({
      pageNO: pageNumber,
    });
  };

  const handleFilterComponentClick = () => {
    setShowFilter(!showFilter);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const totalPages = Math.ceil(filteredCandidates.length / recordsPerPage);

  const role = useSelector(GetUserRole);

  const handleAddCandidate = () => {
    dispatch(openModal({
      modalName: "AddCandidateModal",
      modalData: {}
    }));
  };

  const handleAddOrEditCandidate = ({
    mode,
    ...formData
  }) => {
    if (mode === "EDIT") {
      dispatch(EditCandidate({
        data: {...formData},
        onSuccess: () => {},
        onError: () => {}
      }));
    } else {
      dispatch(AddCandidate({
        data: {...formData},
        onSuccess: () => {},
        onError: () => {}
      }));
    }
  };

  const handleCheckboxChange = (optionSelected, selected) => {
    if (selected) {
      setStatusFilter([
        ...statusFilter,
        optionSelected,
      ]);
    } else {
      setStatusFilter(statusFilter.filter((status) => status.value !== optionSelected.value));
    }
  };

  const headerActions = [
    null,
    null,
    // <div className="statsu-filter">
    //   <FilterComponent
    //     className='filter'
    //     onClick={handleFilterComponentClick}
    //   />
    //   {showFilter && (
    //     <div className='drop-box-menu'>
    //       <OptionsMenu
    //         id="dashBoardStatusFilter"
    //         options={statuses}
    //         handleCheckbox={handleCheckboxChange}
    //         selectedOptions={statusFilter}
    //       />
    //     </div>
    //   )}
    // </div>,
    <StatuFilter
      showFilter={showFilter}
      statuses={statuses}
      statusFilter={statusFilter}
      handleCheckboxChange={handleCheckboxChange}
      handleFilterComponentClick={handleFilterComponentClick}
    />,
    null,
    null,
    null,
  ];

  return (
    <div className="dashboard">
      <UserDisplay />
      { role === "HR" &&
      <div>
        <div className="dashboard-filters-and-actions">
          <div className="candidate-insights">Candidate Insights</div>
          <div className="search-field">
            <input
              className="search-text"
              type="search"
              placeholder="Search Candidate Name, Tech Skills"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search />
          </div>
          { role === "HR" &&
        <Button
          label="Add Candidate"
          handleClick={handleAddCandidate}
          children={<AddIcon />}
        />
          }
        </div>
        <div className="card">
          <table>
            <SubHeader
              columns={[
                "Candidate Name",
                "Tech Skills",
                "Status",
                "View/Dashboard Report",
                "Feedback",
                "Actions",
              ]}
              headerActions={headerActions}
            />
            <SubLayout
              data={filteredCandidates}
              currentPage={currentPage}
              recordsPerPage={recordsPerPage}
              filteredCandidates={filteredCandidates}
            />
          </table>
          <SubFooter
            data={candidates}
            currentPage={currentPage}
            totalPages={totalPages}
            totalRecords={candidates.length}
            recordsPerPage={recordsPerPage}
            onPageChange={handlePageChange}
            filteredCandidates={filteredCandidates}
            selectedStatus={selectedStatus}
          />
          {/* {showFilter &&
          (<StatusFilter
            onFilterChange={handleFilterChange}
            onClose={() => setShowFilter(false)}
            selectedStatus={selectedStatus}
          />)} */}
        </div>
        <AddCandidateModal
          handleAddOrEditCandidate={handleAddOrEditCandidate}
        />
        <FeedbackModal />
      </div>
      }
    </div>
  );
};

export default Dashboard;

