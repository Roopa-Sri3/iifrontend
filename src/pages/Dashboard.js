import React from "react";
import Button from "../components/core/button/button";
import { useDispatch, useSelector } from "react-redux";
import { openModal, } from '../store/reducers/app/app';
import
AddCandidateModal
  from "../components/modals/addCandidateModal/AddCandidateModal";
import UserDisplay from '../components/UserDisplay/UserDisplay';
import './Dashboard.css';
import { GetUserRole } from "../store/selector/app";

function Dashboard() {
  const dispatch = useDispatch();
  const role = useSelector(GetUserRole);

  const handleAddCandidate = () => {
    dispatch(openModal({
      modalName: 'AddCandidateModal',
      modalData: {
      }
    }));
  };

  return (
    <div className="dashbord-root">
      <UserDisplay />
      <div className="dashbord-filters-and-actions">
        { role === 'HR' &&
          <Button
            label="Add Candidate"
            handleClick={handleAddCandidate}
          />
        }
      </div>
      <AddCandidateModal />
    </div>
  );
}

export default Dashboard;
