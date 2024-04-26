/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useSelector } from "react-redux";
import { GetModalData, IsModalOpen } from "../../../store/selector/app/app";
import Modal from "../../core/modal/Modal";
import { closeModal } from "../../../store/reducers/app/app";
import CloseLogo from "../../../assets/svgs/CloseLogo";
import FilledStarComponent from "../../../assets/svgs/filledStar";
import EmptyStarComponent from "../../../assets/svgs/emptyStar";
import { useDispatch } from "react-redux";
import './FeedbackModal.css';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const IsFeedbackModelOpen = useSelector((state) =>
    IsModalOpen(state, 'FeedbackModal'));
  const storeModalData = useSelector(GetModalData);

  console.log('Data', storeModalData);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderRatingStars = () => {
    if (!storeModalData) return null;

    const filledStars = Array.from({ length: storeModalData.feedback },
      (_, index) => (
        <FilledStarComponent key={`filled-star-${index}`} />
      ));
    const emptyStars = Array.from({ length: 5 - storeModalData.feedback },
      (_, index) => (
        <EmptyStarComponent key={`empty-star-${index}`} />
      ));
    return [...filledStars, ...emptyStars];
  };

  return (
    <div>
      <Modal
        show={IsFeedbackModelOpen}
        size="model-md"
      >
        <>
          <div role='button'
            onClick={handleCloseModal}
            className='close-icon'>
            <CloseLogo color={"black"} />
          </div>
          <div>
            {storeModalData && (
              <>
                <h2>{storeModalData.candidateName}</h2>
                <div className="rating-stars">
                  {renderRatingStars()}
                </div>
                <p>Feedback: {storeModalData.feedback}</p>
              </>
            )}
          </div>
        </>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
