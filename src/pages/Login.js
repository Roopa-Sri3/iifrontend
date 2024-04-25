import React from "react";
import Button from "../components/core/button/button";
import { useDispatch } from "react-redux";
import { openModal, } from '../store/reducers/app/app';
// eslint-disable-next-line max-len
import AddCandidateModal from "../components/modals/addCandidateModal/AddCandidateModal";

function Login() {
  const dispatch = useDispatch();

  const handleAddCandidate = () => {
    dispatch(openModal({ modalName: 'AddCandidateModal'}));
  };
  return (
    <div>
      Login Page<br/>
      <Button label="Add Candidate"
        handleClick={handleAddCandidate} >{<AddCandidateModal />}</Button>
    </div>

  );
}

export default Login;
