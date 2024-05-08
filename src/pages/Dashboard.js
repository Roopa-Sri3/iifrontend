import React, {useState, useEffect} from "react";
import Button from "../components/core/button/button";
import { useDispatch, useSelector } from "react-redux";
import { openModal, } from '../store/reducers/app/app';
import
AddCandidateModal
  from "../components/modals/addCandidateModal/AddCandidateModal";
import FeedbackModal from '../components/modals/feedbackModal/FeedbackModal';
import StatusFilter from './StatusFilter';
import Search from '../components/assets/svgs/Search';
import {
  AddCandidate,
  EditCandidate,
  GetTechSkills,
} from '../store/reducers/dashboard/dashboard.js';
import { GetUserRole } from "../store/selector/app";
import SubFooter from "../components/table/SubFooter/SubFooter";
import SubHeader from "../components/table/SubHeader/SubHeader";
import SubLayout from "../components/table/SubLayout/SubLayout";
import UserDisplay from '../components/UserDisplay/UserDisplay';

import FilterComponent from '../assets/svgs/filterImage';

import { candidates } from "../shared/constants";
import './Dashboard.css';
import AddIcon from "../components/assets/svgs/AddIcon.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTechSkills({
      onSuccess: () => {
        console.log('Success');
      },
      onError: () => {
        console.log('Error');
      },
    }));
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const role = useSelector(GetUserRole);

  const handleAddCandidate = () => {
    dispatch(openModal({
      modalName: 'AddCandidateModal',
      modalData: {
      }
    }));
  };

  const handleAddOrEditCandidate = ({
    mode,
    ...formData
  }) => {
    console.log('formData', formData);
    console.log('mode', mode);
    if (mode === 'EDIT') {
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

  const headerActions =
  [null,
    null,
    <FilterComponent className='filter'
      onClick={handleFilterComponentClick}/>,
    null, null, null];

  return (
    <div className="dashboard">
      <UserDisplay />
      { role === 'HR' &&
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
          { role === 'HR' &&
        <Button
          label="Add Candidate"
          handleClick={handleAddCandidate}
          children={<AddIcon />}
        />
          }
        </div>
        <div className="card">
          <table>
            <SubHeader columns={['Candidate Name',
              'Tech Skills',
              'Status',
              'View/Dashboard Report',
              'Feedback',
              'Actions']}
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

