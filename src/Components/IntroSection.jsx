import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-router-dom';


export default function IntroSection() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <>
            <div className="intro-section">

                <div className="image"><img src={"https://img.freepik.com/free-vector/men-teamwork-with-briefcase-business-coins_24877-54774.jpg?t=st=1721239493~exp=1721243093~hmac=43d3c41ed6f687a4b69e6ec21bdec3ad8f86289c0b9794a7d05b00c8a02c3ee1&w=740"} alt="" /></div>
                <div className="intro-content">
                    <Typography variant="h3">
                        Welcome to Your Loan Management Portal

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Access your personalized dashboard to manage your loan details, make payments, and track your loan status.
                    </Typography>
                    {isAuthenticated ? <Link to={"/Dashboard"}><Button  variant="contained" color="success" mt={2}>Dashboard</Button></Link>
                        : <Button onClick={() => loginWithRedirect()} variant="contained" mt={2}>Log in</Button>}

                </div>
            </div>
        </>
    )
}
