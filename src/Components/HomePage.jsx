import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ResponsiveAppBar from './ResponsiveAppBar';
import IntroSection from './IntroSection';



export default function HomePage() {

   
    const { logout } = useAuth0();
    return (
        <>
         
            <IntroSection/>

    
        </>
    )
}
