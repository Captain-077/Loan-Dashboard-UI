import { Button } from '@mui/material';
import React, { useState } from 'react'
import { render } from 'react-dom';

export default function Loan_App() {

  const stepCount = ["personal details", "contact details", "Document files"]

  const [personalDetails, setPersonalDetails] = useState({ Name: "", Gender: "", DateOfBirth: "", PanCard: "", AdhaarCard: "" });
  const [contactDetails, setContactDetails] = useState({ Email: "", PhoneNumber: "", address: "" });
  const [documents, setDocuments] = useState({ PanFile: null, AdhaarFile: null });
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeDoc = (e) => {
    const { name, value } = e.target
    setDocuments((prev) => ({ ...prev, [name]: value }))
  }


  const handleChangeContact = (e) => {
    const { name, value } = e.target
    setContactDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleChangePersonal = (e) => {
    const { name, value } = e.target
    setPersonalDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handlePrev = () => {setActiveStep(activeStep - 1);}
  const handleNext = () => {setActiveStep(activeStep + 1);}
  const renderform = (step) => {
    switch (step) {

      case 0:
        return <div className="step-one">
          <h2>Applicant personal details</h2>
          <label htmlFor="">Name</label>
          <input type="text" name="Name" value={personalDetails.Name} onChange={handleChangePersonal} />
          <label htmlFor="">Gender</label>
          <input type="text" name="Gender" value={personalDetails.Gender} onChange={handleChangePersonal} />
          <label htmlFor="">DateOfBirth</label>
          <input type="date" name="DateOfBirth" value={personalDetails.DateOfBirth} onChange={handleChangePersonal} />
          <label htmlFor="">PanCard</label>
          <input type="phone" name="PanCard" value={personalDetails.PanCard} onChange={handleChangePersonal} />
          <label htmlFor="">AdhaarCard</label>
          <input type="phone" name="AdhaarCard" value={personalDetails.AdhaarCard} onChange={handleChangePersonal} />
        </div>

        


      case 1:
        return <div className="step-two">
          <h2>Contact Details</h2>
          <label htmlFor="">Email</label>
          <input type="text" name="Email" value={contactDetails.Email} onChange={handleChangeContact} />
          <label htmlFor="">PhoneNumber</label>
          <input type="Phone" name="PhoneNumber" value={contactDetails.PhoneNumber} onChange={handleChangeContact} />
          <label htmlFor="">address</label>
          <input type="text" name="address" value={contactDetails.address} onChange={handleChangeContact} />
        </div>


   


      case 2:
        return <div className="step-three">
          <h2>Document upload form</h2>
          <label htmlFor="">PanFile</label>
          <input type="file" name="PanFile" value={documents.PanFile} onChange={handleChangeDoc} />
          <label htmlFor="">AdhaarFile</label>
          <input type="file" name="AdhaarFile" value={documents.AdhaarFile} onChange={handleChangeDoc} />
        </div>
        default:
          return "unknown step"


    }

  }

  return (
    <>

      <h1>Loan_App</h1>

      {renderform(activeStep)}
      <Button onClick={handlePrev} variant="contained" mt={2}>Prev</Button>
      <Button onClick={handleNext} variant="contained" mt={2}>Next</Button>
  





    </>

  )
}
