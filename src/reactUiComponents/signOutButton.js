import React from 'react';
import { signOut } from 'aws-amplify/auth';
import './signOutButton.css'; // Import the CSS file

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="sign-out-button"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
