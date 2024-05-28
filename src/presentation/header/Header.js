import React, { useState  }from "react";
import { useDispatch, useSelector} from "react-redux";
import { IsUserLoggedIn, GetProfileName, GetUserRole } from "../../store/selector/app";

import Innovalogo from "../../dashboard-header-components/Logo";
import Title from "../../dashboard-header-components/Title";
import RoundButton from "../../dashboard-header-components/RoundButton";
import Expand from "../../components/assets/svgs/Expand";
import LogoutIcons from "../../components/assets/svgs/LougoutIcons";
import companylogo from "../../assets/Images/company-symbol.png";
import { openModal } from "../../store/reducers/app/app";

import Timer from "../../components/timer/Timer";
import { GetExamStatus } from "../../store/selector/screen";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(IsUserLoggedIn);

  const examStarted = useSelector(GetExamStatus);

  const profileName = useSelector(GetProfileName);
  const userRole = useSelector(GetUserRole);
  const [isOpen, setIsOpen] = useState(false);
  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutClick = () => {
    dispatch(openModal({
      modalName: "LogoutModal",
      modalData: {
      }
    }));
    setIsOpen(false);
  };
  return (
    <div className="header">
      <Innovalogo src={companylogo} alt="companylogo" className='innova-logo' />

      {!(window.location.pathname === "/") &&
        <Title text="Interview Insights" className="interview-insights-title" />
      }
      {isLoggedIn && (
        <div className='logged-in-app-header'>
          <div className="round">
            <RoundButton />
            <Expand className="expand-icon" onClick={toggleExpand} />
            {isOpen && (
              <div className="expand-div"  >
                <h6 className="user-name">{profileName}</h6>
                <h6 className="user-role">{userRole}</h6>
                <hr></hr>
                <div className="logout-icon">
                  <div>
                    <LogoutIcons />
                    <button
                      className = "logout-button"
                      tabIndex="0"
                      onClick={handleLogoutClick}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          handleLogoutClick();
                        }
                      }}
                    >
                      <h6
                      >Logout</h6>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {examStarted &&
        <div className='header-timer'>
          <Timer />
        </div>
      }
    </div>
  );
};

export default Header;
