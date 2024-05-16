import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/core/Input/Input";
import Label from "../components/core/Label/Label";
import "./Login.css";
import background from "../assets/Images/BlueBackground.png";
import image from "../assets/Images/Group.png";
import imagetext from "../assets/Images/Login-Text.png";
import Button from "../components/core/button/button";
import {emailPattern, passwordPattern} from "../shared/constants";
import {
  PostToken,
  PostUserCredentials,
  setUserDetails,
} from "../store/reducers/app/app";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const verifyCredentials = (username, password) => {
    // Verify if any of the credentials matches
    // then find that object and set the store with the respective values.
    // const user = LOGIN_MOCKUP_DATA.find(user => user.username === email
    //   && user.password === password);
    dispatch(
      PostUserCredentials({
        data: {
          username,
          password,
        },
        onSuccess: (response) => {
          console.log("Success");
          console.log(response);
          const token = response.token;
          dispatch(PostToken({
            data: {
              token,
            },
            onSuccess: (userDetails) => {
              const resposeDetails = userDetails && userDetails.response;
              if (resposeDetails) {
                dispatch(setUserDetails({
                  ...resposeDetails
                }));
                navigate("/dashboard");
              }
            },
            onError: () => {}
          }));
        },
        onError: (e) => {
          console.error(e);
        }
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation criteria
    const emailCheck = emailPattern.test(email);
    const passwordCheck = passwordPattern.test(password);

    if (email.trim() === "" || !emailCheck) {
      setEmailError("Please enter valid email address.");
    }
    else {
      setEmailError("");
      if (password.trim() === "" || !passwordCheck) {
        setPasswordError("Please enter valid password.");
      }
      else {
        setPasswordError("");
        verifyCredentials(email, password);
      }
    }
  };

  return (
    <div className='page'>
      <div className='login-body-page'>
        <img src={background} alt='' className='background-image'></img>
        <div className='login-image-block'>
          <img src={imagetext} alt='' className='image-text'></img>
          <img src={image} alt=''></img>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <p className='login-welcome-style'>
            Welcome to
            <span className='interview-insights-name'>
              &nbsp;Interview Insights
            </span>
          </p>
          <h3 className='signin-text'>Sign in</h3>
          <div className='label-and-input'>
            <Label
              htmlFor="email"
              text="Email address"
              className='label-text'
            />
            <Input
              type="email"
              placeholder="Email address"
              id="email"
              onChange={handleEmailChange}
              autoComplete="off"
              className={emailError ? "error" : "basic-input"}
            />
            {emailError && <p className='error-message'>{emailError}</p>}
          </div>
          <div className='label-and-input'>
            <Label
              htmlFor="password"
              text="Password"
              className='label-text'
            />
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePasswordChange}
              autoComplete="off"
              className={passwordError ? "error" : "basic-input"}
            />
            {passwordError && <p className='error-message'>{passwordError}</p>}
          </div>
          <Button
            label="Login"
            id="submit"
            className='basic-button'
          />
        </form>
      </div>
    </div>

  );
}

export default Login;
