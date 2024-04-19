import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchUsers } from '../store/reducers/app/app';

function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  return (
    <div>
      Login Page
    </div>
  );
}

export default Login;
