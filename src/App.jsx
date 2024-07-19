import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import { Outlet, Route, Routes } from 'react-router'
import Loan_App from './Menu_Pages/Loan_App'
import Loan_reports from './Menu_Pages/Loan_reports'
import ResponsiveAppBar from './Components/ResponsiveAppBar'
import Dashboard from './Menu_Pages/Dashboard'

function App() {


  return (
    <>
       <ResponsiveAppBar />
    
       <Routes>  
      <Route path='/' element={<HomePage/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='Loan Application' element={<Loan_App/>}/>
      <Route path='Loan Reports' element={<Loan_reports/>}/>
     </Routes> 
      
    </>
  )
}

export default App
