import React from 'react'
import {  Routes, Route , Navigate} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Reports from './reports/Reports';
import MultiStepForm from './patientRegister/MultiStepForm';
import Link1 from './patientData/Link1';
import Link2 from './patientData/Link2';
import Link3 from './operatio-theater/Link1';
import Link4 from './operatio-theater/Link2';
import RegisterPatient from './patientRegister/RegisterPatient';


function HealthApp() {
  return (
    <>
     <Routes>
      <Route path="/" element={<RegisterPatient />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient-register" element={<RegisterPatient />} />
        <Route path="/patient-data/link1" element={<Link1 />} />
        <Route path="/patient-data/link2" element={<Link2 />} />

        <Route path="/operation-theater/link3" element={<Link3 />} />
        <Route path="/operation-theater/link4" element={<Link4 />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  )
}

export default HealthApp
