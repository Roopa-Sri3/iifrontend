import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetModalData, IsModalOpen } from "../../../store/selector/app/app";
import Modal from "../../core/modal/Modal";
import { closeModal } from "../../../store/reducers/app/app";
import CloseIcon from "../../../assets/svgs/CloseLogo";
import StarIcon from "../../../assets/svgs/StarIcon";
import "./FeedbackModal.css";

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const IsFeedbackModelOpen = useSelector((state) =>
    IsModalOpen(state, 'FeedbackModal')
  );
  const storeModalData = useSelector(GetModalData);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const ratingLabels = ["Bad", "Average", "Good", "Excellent", "Outstanding"];

  const renderRatingStars = () => {
    if (!storeModalData) return null;

    const stars = [];
    for (let i = 0; i < 5; i++) {
      const fillColor = i < storeModalData.feedback ? "#FFD700" : "#D9D9D9";
      const label = ratingLabels[i];
      stars.push(
        <div key={`star-${label}`} className="star-with-label">
          <StarIcon fillColor={fillColor} />
          <span className="star-label">{label}</span>
        </div>
      );
    }
    return <div className="rating-stars">{stars}</div>;
  };

  return (
    <div>
      {storeModalData && (
        <Modal
          show={IsFeedbackModelOpen}
          size="model-md"
          modalHeader={
            <div className="feedback-header">
              <div className="candidate-name">
                {storeModalData.candidateName}
              </div>
              <CloseIcon color={"black"} onClick={handleCloseModal} />
            </div>
          }
        >
          <div className="feedback-body">
            {renderRatingStars()}
            <p className="heading">Feedback Comments</p>
            <div className="bordered-box">
              <p className="box-text">{storeModalData.comment}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FeedbackModal;
