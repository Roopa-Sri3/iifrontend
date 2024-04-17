import React, {useState} from 'react';
import Input from '../components/core/Input/Input';

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
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        // value="email"
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        // value="password"
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
