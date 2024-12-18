import React from "react";
import { useSelector } from "react-redux";

import Stepper from "./Stepper"; // Import Stepper Component
import BasicDetailsForm from "./BasicDetailsForm";
import LegalDocumentsForm from "./LegalDocumentsForm";
import DemographicsForm from "./DemographicsForm";

const RegisterPatient = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  return (
    <div className="w-full  bg-[#F4F2F0]  h-fit">
        <h1 className="flex justify-center w-full text-2xl font-semibold  py-6">Register a new patient</h1>
      <Stepper className="my-10" currentStep={currentStep} /> 

      <div className="mt-6  p-4">
        {currentStep === 1 && <BasicDetailsForm />}
        {currentStep === 2 && <LegalDocumentsForm />}
        {currentStep === 3 && <DemographicsForm />}
      </div>
    </div>
  );
};

export default RegisterPatient;
