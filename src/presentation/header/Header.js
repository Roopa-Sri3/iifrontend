
import React, { /*useState*/ }from "react";
import { useSelector,} from "react-redux";
import {
  GetExamStatus,
  IsUserLoggedIn,/* GetUserName, GetUserRole*/ }  from "../../store/selector/app";

import Innovalogo from "../../dashboard-header-components/Logo";
import Title from "../../dashboard-header-components/Title";
import RoundButton from "../../dashboard-header-components/RoundButton";
import Expand from "../../components/core/assets/svgs/Expand";
// import LogoutIcons from '../../components/core/assets/svgs/LougoutIcons';

import companylogo from "../../assets/Images/company-symbol.png";
import "./Header.css";
import Timer from "../../components/timer/Timer";

const Header = () => {
  const isLoggedIn = useSelector(IsUserLoggedIn);

  const examStarted = useSelector(GetExamStatus);
  console.log("examStarted : ",examStarted);

  // const userName = useSelector(GetUserName);
  // const userRole = useSelector(GetUserRole);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleExpand = () => {
  //   setIsOpen(!isOpen);
  // };

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
            <Expand className="expand-icon"/>
            {/* TODO : Need to add the expand functionality later */}
            {/* {isOpen && (
              <div className="expand-div"  >
                <h6 className="user-name">{userName}</h6>
                <h6 className="user-role">{userRole}</h6>
                <hr></hr>
                <LogoutIcons className="logout-icon" />
                <h6 className="logout">Logout </h6>
              </div>
            )} */}
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
