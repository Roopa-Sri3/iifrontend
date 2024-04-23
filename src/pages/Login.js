import React, {useState} from 'react';
import Input from '../components/core/Input/Input';
import Label from '../components/core/Label/Label';
import './Login.css';
import background from '../Images/BlueBackground.png';
import image from '../Images/Group.png';
import imagetext from '../Images/Login-Text.png';
import innovalogo from '../Images/InnovaLogo.png';

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
    <div className='page container-fluid d-flex flex-column h-90'>
      <div className='login-body-page row-xs-12 row-md-6 row-lg-4'>
        <img src={innovalogo} alt='' className='innova-logo'></img>
        <img src={background} alt='' className='background-image'></img>
        <div className='login-image-block'>
          <img src={imagetext} alt='' className='image-text'></img>
          <img src={image} alt=''></img>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <p className='login-welcome-style'>
            Welcome to <h3 className='interview-insights-name'>
              Interview Insights</h3>
          </p>
          <h3 className='signin-text'>Sign in</h3>
          <div className='label-and-input'>
            <Label
              htmlFor="email"
              text="Email address"
              // className='label-text'
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
              // className='label-text'
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
          <Input
            type="submit"
            placeholder="Login"
            id="submit"
            value="Submit"
            className='basic-input'
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
