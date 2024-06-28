import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/core/button/button";
import SubFooter from "../components/table/SubFooter/SubFooter";
import SubHeader from "../components/table/SubHeader/SubHeader";
import SubLayout from "../components/table/SubLayout/SubLayout";
import UserDisplay from "../components/UserDisplay/UserDisplay";
import AddCandidateModal from "../components/modals/addCandidateModal/AddCandidateModal";
import FeedbackModal from "../components/modals/feedbackModal/FeedbackModal";
import { openModal } from "../store/reducers/app/app";
import { GetCandidateDetails, GetTechSkills } from "../store/reducers/dashboard/dashboard.js";
import { GetUserRole } from "../store/selector/app";
import { GetStoreCandidates, GetStoreCandidatesTotalCount } from "../store/selector/dashboard/dashboard.js";
import ClearTextIcon from "../assets/svgs/CrossMark.js";
import Search from "../assets/svgs/Search";
import AddIcon from "../assets/svgs/AddIcon.js";
import StatusFilter from "../components/table/statuFilter/StatuFilter.js";
import LogoutModal from "../components/modals/logoutModal/LogoutModal.js";
import { results, statuses } from "../shared/constants.js";
import "./Dashboard.css";
import ResultFilter from "../components/table/resultFilter/ResultFilter.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const hrToken = sessionStorage.getItem("Token");
  const candidates = useSelector(GetStoreCandidates);
  const candidatesTotalCount = useSelector(GetStoreCandidatesTotalCount);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const recordsPerPage = 10;
  const [selectedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState([]);
  const [resultFilter, setResultFilter] = useState([]);

  useEffect(() => {
    dispatch(GetTechSkills({
      onSuccess: () => { },
      onError: () => { },
    }));
  }, [dispatch]);

  const fetchCandidates = () => {
    const data = {
      statuses: statusFilter.map((status) => status.value),
      page: currentPage,
      search: searchTerm,
      result: resultFilter.map((result) => result.value),
      token: hrToken,
    };
    dispatch(GetCandidateDetails({
      data,
      onSuccess: () => { },
      onError: () => { },
    }));
  };

  useEffect(() => {
    const data = {
      statuses: statusFilter.map((status) => status.value),
      page: currentPage,
      search: searchTerm,
      result: resultFilter.map((result) => result.value),
      token: hrToken,
    };
    dispatch(GetCandidateDetails({
      data,
      onSuccess: () => { },
      onError: () => { },
    }));
  }, [currentPage, statusFilter, searchTerm, hrToken, resultFilter, dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchTerm(searchFieldValue);
  };

  const totalPages = Math.ceil(candidatesTotalCount / recordsPerPage);

  const role = useSelector(GetUserRole);

  const handleAddCandidate = () => {
    dispatch(openModal({
      modalName: "AddCandidateModal",
      modalData: {}
    }));
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

  const handleResultChange = (optionSelected, selected) => {
    if (selected) {
      setResultFilter([
        ...resultFilter,
        optionSelected,
      ]);
      setCurrentPage(1);
    } else {
      setResultFilter(resultFilter.filter((assessmentResult) => assessmentResult.value !== optionSelected.value));
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
    <ResultFilter
      results={results}
      resultFilter={resultFilter}
      handleResultChange={handleResultChange}
    />,
    null,
    null,
    null,
  ];

  return (
    <div className="dashboard">
      <UserDisplay />
      <div>
        <div className="dashboard-filters-and-actions">
          <div className="candidate-insights">Candidate Insights</div>
          <div className="search-field">
            <input
              className="search-text"
              type="search"
              placeholder="Search Candidate Name, Tech Skills"
              value={searchFieldValue}
              onChange={(e) => {
                setSearchFieldValue(e.target.value);
              }}
              onBlur={handleSearch}
              onKeyDown = {(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            {searchFieldValue.length > 0 && (
              <ClearTextIcon
                onClick={() => {
                  setSearchFieldValue("");
                  setSearchTerm("");
                  fetchCandidates();
                }}
              />
            )}
            <Search/>
          </div>
          {role === "ADMIN" &&
            <div></div>
          }
          {role === "HR" &&
              <Button
                className="addCandidateButton"
                label="Add Candidate"
                handleClick={handleAddCandidate}
                children={<AddIcon />}
              />
          }
        </div>
        <div className="card">
          <table>
            <SubHeader className="column-heading"
              columns={role === "HR" ? [
                "Candidate Name",
                "Tech Skills",
                "Status",
                "Score",
                "Result",
                "Download Report",
                "Candidate Remarks",
                "Actions",
              ] : [
                "Candidate Name",
                "Tech Skills",
                "Status",
                "Score",
                "Result",
                "Download Report",
                "Candidate Remarks",
              ]}
              headerActions={headerActions}
            />
            {candidates.length > 0 ? (
              <SubLayout
                currentPage={currentPage}
                recordsPerPage={recordsPerPage}
                filteredCandidates={candidates}
                fetchCandidates={fetchCandidates}
              />
            ) : (
              <tbody>
                <tr>
                  <td colSpan="10" className="no-records-found">No Records Found</td>
                </tr>
              </tbody>
            )}
          </table>
          <SubFooter
            data={candidates}
            currentPage={currentPage}
            totalPages={totalPages}
            totalRecords={candidates.length}
            recordsPerPage={recordsPerPage}
            onPageChange={handlePageChange}
            filteredCandidates={candidates}
            selectedStatus={selectedStatus}
          />
        </div>
        <AddCandidateModal
          fetchCandidates={fetchCandidates}
        />
        <FeedbackModal />
        <LogoutModal />
      </div>
    </div>
  );
};

export default Dashboard;
