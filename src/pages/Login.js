import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Input from '../components/core/Input/Input';
import Label from '../components/core/Label/Label';
import './Login.css';
import background from '../Images/BlueBackground.png';
import image from '../Images/Group.png';
import imagetext from '../Images/Login-Text.png';
import innovalogo from '../Images/InnovaLogo.png';
import Button from '../components/core/button/button';
// eslint-disable-next-line max-len
import {LOGIN_MOCKUP_DATA, emailPattern, passwordPattern} from '../shared/constants';
import { setUserDetails } from '../store/reducers/app/app';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const verifyCredentials = (userName, password) => {
    // Verify if any of the credentials matches
    // then find that object and set the store with the respective values.
    const user = LOGIN_MOCKUP_DATA.find(user => user.username === email
    && user.password === password);
    if(user){
      dispatch(setUserDetails({
        userName: user.username,
        profileName: user.profileName,
        role: user.role,
      }));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation criteria
    const emailCheck = emailPattern.test(email);
    const passwordCheck = passwordPattern.test(password);

    if(email.trim() === '' || !emailCheck){
      setEmailError('Please enter valid email address.');
    }
    else{
      setEmailError('');
      if (password.trim() === '' || !passwordCheck) {
        setPasswordError('Please enter valid password.');
      }
      else{
        setPasswordError('');
        if(verifyCredentials(email, password)){
          alert("Login Successful");
          return;
        }
        else{
          alert("Invalid Username or Password");
        }
      }
    }
  };

  return (
    <div className='page'>
      <div className='login-body-page'>
        <img src={innovalogo} alt='' className='innova-logo'></img>
        <img src={background} alt='' className='background-image'></img>
        <div className='login-image-block'>
          <img src={imagetext} alt='' className='image-text'></img>
          <img src={image} alt=''></img>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <p className='login-welcome-style'>
            Welcome to
            <h3 className='interview-insights-name'>
              Interview Insights
            </h3>
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
              className={emailError ? 'error' : 'basic-input'}
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
              className={passwordError ? 'error' : 'basic-input'}
            />
            {passwordError && <p  className='error-message'>{passwordError}</p>}
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
