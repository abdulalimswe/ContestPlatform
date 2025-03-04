import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AuthContext } from './AuthSignOut';

const SignOut = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    logout();
    navigate('/login');
  };

  return (
    <Button variant="danger" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
