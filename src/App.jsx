import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import { Outlet, Route, Routes } from 'react-router'
import { Dashboard } from '@mui/icons-material'
import Loan_App from './Menu_Pages/Loan_App'
import Loan_reports from './Menu_Pages/Loan_reports'
import ResponsiveAppBar from './Components/ResponsiveAppBar'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
       <ResponsiveAppBar />
    
       <Routes>  <Route path='/' element={<HomePage/>}/>

       {isAuthenticated ? 
       <>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Loan Application' element={<Loan_App/>}/>
      <Route path='/Loan Reports' element={<Loan_reports/>}/>
      </> : "hello" }
     </Routes> 
      
    </>
  )
}

export default App
