import React, {useState} from 'react';
import Input from '../components/core/Input/Input';
import Label from '../components/core/Label/Label';
import './Login.css';
import background from '../Images/BlueBackground.png';
import image from '../Images/Group.png';
import imagetext from '../Images/Login-Text.png';
import innovalogo from '../Images/InnovaLogo.png';
// import { Alert } from 'bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation criteria
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
    const emailCheck = emailPattern.test(email);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordCheck = passwordPattern.test(password);

    // if (email.trim() === '' || password.trim() === '') {
    //   alert('Please enter both email and password.');
    //   return;
    // }
    // if (email.trim() === '' || !emailCheck) {
    //   setEmailError('Please enter valid email address.');
    //   return;
    // } else {
    //   setEmailError('');
    // }

    // if (password.trim() === '' || !passwordCheck) {
    //   setPasswordError('Please enter valid password.');
    //   return;
    // } else {
    //   setPasswordError('');
    // }
    // // if (!emailCheck) {
    // //   alert('Please enter a valid email address.');
    // //   return;
    // // }
    // // if (!passwordCheck) {
    // //   alert("Password must be at least" +
    // //    " 8 characters long and contain at least one uppercase letter" +
    // //    " , one lowercase letter, one number, and one special character.");
    // //   return;
    // // }
    // // Handle login logic here
    // if(email === "admin@innova.in" && password === "Admin@123"){
    //   alert("Login Successful");
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   return;
    // }
    // else{
    //   alert("Invalid Username or Password");
    // }

    if(email.trim() === '' || !emailCheck){
      setEmailError('Please enter valid email address.');
    }
    else{
      setEmailError('');
      if (password.trim() === '' || !passwordCheck) {
        setPasswordError('Please enter valid password.');
      }
      else {
        setPasswordError('');
        if(email === "admin@innova.in" && password === "Admin@123"){
          alert("Login Successful");
          console.log('Email:', email);
          console.log('Password:', password);
          return;
        }
        else{
          alert("Invalid Username or Password");
        }
      }
    }
  };

  return (
    // <div className='page'></div>
    <div className='login-body-page'>
      <img src={innovalogo} alt='' className='innova-logo'></img>
      <img src={background} alt='' className='background-image'></img>
      <div className='login-image-block'>
        <img src={imagetext} alt='' className='image-text'></img>
        <img src={image} alt=''></img>
      </div>
      <form className="login-container" onSubmit={handleSubmit}>
        <p className='login-welcome-style'>
          Welcome to <h3>Interview Insights</h3>
        </p>
        <h3 className='signin-text'>Sign In</h3>
        <div className='label-and-input'>
          <Label
            htmlFor="email"
            text="Email address"
          />
          <Input
            type="email"
            placeholder="Email address"
            id="email"
            onChange={handleEmailChange}
            autoComplete="off"
            className={emailError ? 'error' : ''}
          />
          {emailError && <p className='error-message'>{emailError}</p>}
        </div>
        <div className='label-and-input'>
          <Label
            htmlFor="password"
            text="Password"
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlePasswordChange}
            autoComplete="off"
            className={passwordError ? 'error' : ''}
          />
          {passwordError && <p  className='error-message'>{passwordError}</p>}
        </div>
        <Input
          type="submit"
          placeholder="Login"
          id="submit"
          value="Submit"
        />
        {/* <input type='submit' value='submit'></input> */}
        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
}

export default Login;
