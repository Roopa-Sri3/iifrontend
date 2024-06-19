import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import CheckCircle from "../assets/svgs/CheckCircle";
import Button from "../components/core/button/button";
import FeedbackStarIcon from "../assets/svgs/FeebackStarIcon";
import { ratingLabels } from "../shared/constants";
import { PostFeedback } from "../store/reducers/screen/screen";
import "./Feedback.css";

const TestSubmit = () => {
  const dispatch = useDispatch();
  const candidateId = sessionStorage.getItem("candidateId");
  const navigate = useNavigate();

  const [rating, setRating] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxLength = 120;

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if(value.length <= maxLength){
      setComment(e.target.value);
      setCharCount(maxLength - comment.length);
    }
  };

  useEffect(() => {
    setCharCount(comment.length);
  }, [comment]);

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const fillColor = i < (hoveredStar != null ? hoveredStar : rating) ? "#FFC90A" : "#C9C9C9";
      const label = (i === 4) ? "Out Standing" : ratingLabels[i];

      stars.push(
        <div key={`star-${label}`} className="test-submit-star-with-label">
          <FeedbackStarIcon
            className={"feedback-star"}
            fillColor={fillColor}
            onMouseEnter= {() => setHoveredStar(i + 1)}
            onMouseLeave= {() => setHoveredStar(null)}
            onClick={() => setRating(i + 1)}
          />
          <span className="test-submit-star-label">{label}</span>
        </div>
      );
    }
    return <div className="test-submit-star">{stars}</div>;
  };

  const handleFeedbackSubmit = () => {
    dispatch(PostFeedback({
      data : {
        candidateId: candidateId,
        rating:rating,
        comments:comment
      },
      onSuccess: () => {
        sessionStorage.removeItem("candidateId");
        navigate("/candidate/thank-you");
      },
      onError: () => {
      }
    }));
  };

  return (
    <div className='test-submit-container'>
      <center>
        <div  className='submit-msg'>
          <CheckCircle color={"green"} />
          <h5 id='test-submit'>Your test has been submitted successfully</h5>
          <p id='test-description'>Please Submit your feedback</p>
        </div>

        <div className='test-submit-feedback'>
          <div id='feedback-title'>Feedback</div>
          <div className='feedback-card'>
            <p className='feedback-sub-title required'>Overall assessment experience</p>
            <div className="test-submit-feedback-stars">
              {renderRatingStars()}
            </div>
            <p className='feedback-sub-title'>Any Comments</p>
            <textarea
              className={`${charCount === maxLength ? "feedback-textarea limit-border" : "feedback-textarea"}`}
              placeholder="Write your comments here..."
              rows={5}
              cols={93}
              maxLength={120}
              value={comment}
              onChange={handleCommentChange}
            />
            <div className={`${charCount === maxLength ? "red-comment-description" : "comment-description"}`}>
              <p>{charCount}/120 characters</p>
            </div>
            <div id='feedback-submit'>
              <Button
                label='Submit Feedback'
                handleClick={handleFeedbackSubmit}
                disabled={(rating === null)}
                className={(rating === null) ? "disable-submit" : "submit-btn"}
              />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default TestSubmit;
