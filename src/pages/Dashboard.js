import React, { useState, useEffect} from "react";
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
import { openModal, setAlert, } from "../store/reducers/app/app";
import {
  AddCandidate,
  EditCandidate,
  GetCandidateDetails,
  GetTechSkills,
} from "../store/reducers/dashboard/dashboard.js";
import { GetUserRole } from "../store/selector/app";
import { GetStoreCandidates, GetStoreCandidatesTotalCount } from "../store/selector/dashboard/dashboard.js";
import { GetToken } from "../store/selector/app";
import ClearTextIcon from "../components/assets/svgs/CrossMark.js";
import Search from "../components/assets/svgs/Search";
import AddIcon from "../components/assets/svgs/AddIcon.js";
import StatusFilter from "../components/table/statuFilter/StatuFilter.js";
import LogoutModal from "../components/modals/logoutModal/LogoutModal.js";
import "./Dashboard.css";
import { statuses } from "../shared/constants.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const hrToken = useSelector(GetToken);
  const candidates = useSelector(GetStoreCandidates);
  const candidatesTotalCount = useSelector(GetStoreCandidatesTotalCount);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFieldValue, setSearchFieldValue] = useState("");
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

  const fetchCandidates = () => {
    const data = {
      statuses: statusFilter.map((status) => status.value),
      page: currentPage,
      search: searchTerm,
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
      token: hrToken,
    };
    dispatch(GetCandidateDetails({
      data,
      onSuccess: () => { },
      onError: () => { },
    }));
  }, [currentPage, statusFilter, searchTerm, hrToken, dispatch]);

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

  const handleAddOrEditCandidate = ({
    mode,
    candidateId,
    ...formData
  }) => {
    if (mode === "EDIT") {
      dispatch(EditCandidate({
        data: {
          candidateId,
          ...formData
        },
        onSuccess: () => {
          fetchCandidates();
          dispatch(setAlert({
            message: "Candidate details updated successfully",
            messageType: "success"
          }));
        },
        onError: () => {
          dispatch(setAlert({
            message: "Failed to update details",
            messageType: "failure"
          }));
        }
      }));
    } else {
      dispatch(AddCandidate({
        data: { ...formData },
        onSuccess: () => {
          fetchCandidates();

          const message = formData.shareLink ? "Candidate added and link shared successfully" : "Candidate added successfully";

          dispatch(setAlert({
            message,
            messageType: "success"
          }));
        },
        onError: () => {
          const message = formData.shareLink ? "Failed to send link and add candidate" : "Failed to add candidate";

          dispatch(setAlert({
            message,
            messageType: "failure"
          }));
        }
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
                "View/Download Report",
                "Feedback",
                "Actions",
              ] : [
                "Candidate Name",
                "Tech Skills",
                "Status",
                "View/Download Report",
                "Feedback",
              ]}
              headerActions={headerActions}
            />
            {candidates.length > 0 ? (
              <SubLayout
                currentPage={currentPage}
                recordsPerPage={recordsPerPage}
                filteredCandidates={candidates}
              />
            ) : (
              <tbody>
                <tr>
                  <td colSpan="6" className="no-records-found">No Records Found</td>
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
          handleAddOrEditCandidate={handleAddOrEditCandidate}
        />
        <FeedbackModal />
        <LogoutModal />
      </div>
    </div>
  );
};

export default Dashboard;

