import React, { useState } from "react";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";
import PersonalDetails from "./PersonalDetails";
import FinancialInfo from "./FinancialInfo";
import IdentityVerification from "./IdentityVerification";
import ContactDetails from "./ContactDetails";
import Summary from "./Summary";

const KYCForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    gender: '',
    email: '',
    phoneNumber: '',
    residentialAddress: '',
    employmentStatus: '',
    annualIncome: '',
    sourceOfIncome: '',
    governmentIdType: '',
    idNumber: '',
    idDocument: null,
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);
  const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

  // Step names to be used in ProgressBar
  const stepNames = [
    "Personal Details", 
    "Contact Details", 
    "Financial Info", 
    "Identity Verification", 
    "Summary"
  ];

  const steps = [
    <PersonalDetails formData={formData} onChange={handleChange} onNext={handleNext} />,
    <ContactDetails formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />,
    <FinancialInfo formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />,
    <IdentityVerification formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />,
    <Summary formData={formData} onBack={handleBack} />,
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <NavBar />
      <div className="flex">
      <ProgressBar steps={stepNames} currentStep={currentStep} />

{/* Content Area */}
<div className="flex-1 p-6">
  <h1 className="text-2xl font-bold">
    {stepNames[currentStep - 1]}
  </h1>

  {/* Step Components */}
  <div className="mt-6">
    {steps[currentStep - 1]}
  </div>

 
</div>
      </div>
      {/* Sidebar */}
     
    </div>
  );
};

export default KYCForm;
