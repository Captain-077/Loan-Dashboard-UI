import { Typography } from '@mui/material';
import React from 'react'

export default function Dashboard() {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <>
      <div className="intro-section">

        <p>Yo</p>
      </div>
    </>
  )
}
