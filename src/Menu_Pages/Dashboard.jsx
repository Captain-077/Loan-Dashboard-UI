import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import React from 'react'

export default function Dashboard() {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <>
    <div className="Dashboard-section">

        <div className="user-image"><img src={`${user.picture}`} alt="" /></div>
        <div className="Dashboard-content">
            <Typography variant="h5">
               {isAuthenticated &&  `Welcome ${user.name} to your Loan Management Portal` }

            </Typography>
            <Typography variant="body1" gutterBottom>
                Access your personalized dashboard to manage your loan details.
            </Typography>

        </div>
    </div>
</>
  )
}
