import React from 'react';
import { useSelector } from 'react-redux';
import { IsModalOpen } from '../../../store/selector/app/app';
import Modal from '../../core/modal/Modal';

const AddCandidateModal = () => {

  const IsAddCandidateModalOpen = useSelector(
    (state) => IsModalOpen(state, 'AddCandidateModal'),
  );

  return (
    <div>
      <Modal
        show={IsAddCandidateModalOpen}
        size='modal-lg'
        modalHeader='Add Candidate'
      >
        <div>
          <form>

          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCandidateModal;
