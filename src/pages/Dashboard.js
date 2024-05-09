import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/core/button/button";
import AddCandidateModal
  from "../components/modals/addCandidateModal/AddCandidateModal";
import FeedbackModal from "../components/modals/feedbackModal/FeedbackModal";
import SubFooter from "../components/table/SubFooter/SubFooter";
import SubHeader from "../components/table/SubHeader/SubHeader";
import SubLayout from "../components/table/SubLayout/SubLayout";
import UserDisplay from "../components/UserDisplay/UserDisplay";
import Search from "../components/assets/svgs/Search";
import { openModal, } from "../store/reducers/app/app";
import { GetUserRole } from "../store/selector/app";
import FilterComponent from "../assets/svgs/filterImage";
import { candidates } from "../shared/constants";
import StatusFilter from "./StatusFilter";
import "./Dashboard.css";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const role = useSelector(GetUserRole);

  const filteredCandidates = candidates.filter(
    (candidate) =>
      (!selectedStatus || candidate.status === selectedStatus) &&
      (candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
      || candidate.techSkills.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleFilterComponentClick = () => {
    setShowFilter(!showFilter);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const totalPages = Math.ceil(filteredCandidates.length / recordsPerPage);

  const handleAddCandidate = () => {
    dispatch(openModal({
      modalName: "AddCandidateModal",
      modalData: {
      }
    }));
  };

  const headerActions =
  [null,
    null,
    <FilterComponent className='filter'
      onClick={handleFilterComponentClick}/>,
    null, null, null];

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
        />
          }
        </div>
        <div className="card">
          <table>
            <SubHeader columns={["Candidate Name",
              "Tech Skills",
              "Status",
              "View/Dashboard Report",
              "Feedback",
              "Actions"]}
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
            onStatusChange={handleFilterChange}
          />
          {showFilter &&
          (<StatusFilter
            onFilterChange={handleFilterChange}
            onClose={() => setShowFilter(false)}
            selectedStatus={selectedStatus}
          />)}
        </div>
        <AddCandidateModal />
        <FeedbackModal />
      </div>
      }
    </div>
  );
};

export default Dashboard;

