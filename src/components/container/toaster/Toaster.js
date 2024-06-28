import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../core/alert/Alert";
import {
  clearAlert,
  clearTimeoutId,
  setTimeoutId
} from "../../../store/reducers/app/app";
import {
  GetAlertMessage,
  GetAlertMessageType,
  GetTimeoutId,
} from "../../../store/selector/app/app";
import "./Toaster.css";

const Toaster = ({
  handleRemove,
}) => {
  const dispatch = useDispatch();
  const message = useSelector(GetAlertMessage);
  const messageType = useSelector(GetAlertMessageType);
  const timeoutId = useSelector(GetTimeoutId);

  useEffect(() => {
    if (message && !timeoutId) {
      const newTimeoutId = setTimeout(() => {
        dispatch(clearAlert());
        dispatch(clearTimeoutId());
      }, 2000);
      dispatch(setTimeoutId(newTimeoutId));
    }

    return  () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        dispatch(clearTimeoutId());
      }
    };
  }, [dispatch, message, timeoutId]);

  return (
    <div className="toaster">
      {message && (
        <Alert
          message={message}
          messageType={messageType}
          onButtonClick={handleRemove} />
      )}
    </div>
  );

};

export default Toaster;
