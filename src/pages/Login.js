import React, {useState} from 'react';
import Input from '../components/core/Input/Input';
import Label from '../components/core/Label/Label';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation criteria
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-body-page'>
      <div className="login-container" onSubmit={handleSubmit}>
        <p>Welcome to <h3>Interview Insights</h3></p>
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
          />
        </div>
        <div className='LabelAndInput'>
          <Label
            htmlFor="password"
            text="Password"
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlePasswordChange}
          />
        </div>
        <Input
          type="submit"
          placeholder="Login"
          id="submit"
          onChange={handleSubmit}
        />
        {/* <input type='submit' value='submit'></input> */}
        {/* <button type="submit">Login</button> */}
      </div>
    </div>
  );
}

export default Login;
