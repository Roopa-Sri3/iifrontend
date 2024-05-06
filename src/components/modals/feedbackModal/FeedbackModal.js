import React from "react";
import { useSelector } from "react-redux";
import { GetModalData, IsModalOpen } from "../../../store/selector/app/app";
import Modal from "../../core/modal/Modal";
import Button from "../../core/button";
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
          <Button
            handleClick={handleCloseModal}
            className='close-icon'>
            <CloseLogo color={"black"} />
          </Button>
          <div>
            {storeModalData && (
              <>
                {storeModalData && (
                  <>
                    <div className="centered-content">
                      <h2 className="candidate-name">
                        {storeModalData.candidateName}</h2>
                      <div className="rating-stars">
                        {renderRatingStars()}
                      </div>
                    </div>
                    <p className="heading">Feedback Comments</p>
                    <div className="bordered-box">
                      <p className="box-text">
                        {storeModalData.comment}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
