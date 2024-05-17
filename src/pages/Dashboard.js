import React, { useState, useEffect } from "react";
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
  GetTechSkills
} from "../store/reducers/dashboard/dashboard.js";
import { GetUserRole } from "../store/selector/app";
import { candidates, statuses } from "../shared/constants";
import Search from "../components/assets/svgs/Search";
import AddIcon from "../components/assets/svgs/AddIcon.js";
import StatusFilter from "../components/table/statuFilter/StatuFilter.js";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const [selectedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState([]);

  useEffect(() => {
    dispatch(GetTechSkills({
      onSuccess: () => { },
      onError: () => { },
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

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesStatusFilter = statusFilter.length === 0 || statusFilter.some((i) => i.value === candidate.status);
    const matchesSearchTerm = candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.techSkills.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatusFilter && matchesSearchTerm;
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchCurrentPageRecords({
      pageNO: pageNumber,
    });
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
        data: { ...formData },
        onSuccess: () => { },
        onError: () => { }
      }));
    } else {
      dispatch(AddCandidate({
        data: { ...formData },
        onSuccess: () => { },
        onError: () => { }
      }));
    }
  };

  const handleCheckboxChange = (optionSelected, selected) => {
    if (selected) {
      setStatusFilter([
        ...statusFilter,
        optionSelected,
      ]);
      setCurrentPage(1);
    } else {
      setStatusFilter(statusFilter.filter((status) => status.value !== optionSelected.value));
      setCurrentPage(1);
    }
  };

  const headerActions = [
    null,
    null,
    <StatusFilter
      statuses={statuses}
      statusFilter={statusFilter}
      handleCheckboxChange={handleCheckboxChange}
    />,
    null,
    null,
    null,
  ];

  return (
    <div className="dashboard">
      <UserDisplay />
      {role === "HR" &&
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
            {role === "HR" &&
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

