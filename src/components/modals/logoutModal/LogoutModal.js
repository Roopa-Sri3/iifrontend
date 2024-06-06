import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { IsModalOpen } from "../../../store/selector/app";
import { closeModal, resetApp } from "../../../store/reducers/app/app";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button";

import "./LogoutModal.css";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IsLogoutModalOpen = useSelector(
    (state) => IsModalOpen(state, "LogoutModal"),
  );
  const handleNoButton = () => {
    dispatch(closeModal());
  };

  const handleYesButton = () => {
    dispatch(resetApp());
    sessionStorage.removeItem("Token");
    dispatch(closeModal());
    navigate("/");
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      show={IsLogoutModalOpen}
      size='none'
      onClose={handleCloseModal}
    >
      <center>
        <p className='submit-modal-text'>
          Are you sure you want to Logout?
        </p>
        <div className='submit-actions'>
          <Button
            className={"modal-no-button"}
            label={"No"}
            handleClick={handleNoButton}
          />
          <Button
            className={"modal-yes-button"}
            label={"Yes"}
            handleClick={handleYesButton}
          />
        </div>
      </center>
    </Modal>
  );
};

export default LogoutModal;
