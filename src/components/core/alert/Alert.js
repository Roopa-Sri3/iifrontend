import { useDispatch, } from "react-redux";
import { clearAlert } from "../../../store/reducers/app/app";
import GreenCheckCircle from "../../../assets/svgs/GreenCheckCircle";
import GreenClose from "../../../assets/svgs/GreenClose";
import RedCheckCircle from "../../../assets/svgs/RedWarning";
import RedClose from "../../../assets/svgs/RedClose";
import cx from "classnames";
import "./Alert.css";

const Alert = ({
  message,
  messageType,
  onButtonClick,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAlert());
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className={cx("alert", messageType || "success" )} role="alert">
      <div className={cx("alert-content")}>
        <div className="check">
          {messageType === "success"
            ? <GreenCheckCircle /> : <RedCheckCircle />}
        </div>
        <span className={cx("alert-text")}>{message}</span>
        <button className={cx("close")} onClick={handleClick}>
          {messageType === "success" ? <GreenClose/> : <RedClose/>}
        </button>
      </div>
    </div>
  );
};

export default Alert;
