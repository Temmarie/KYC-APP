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
  const handleChange = (field, value) =>
    setFormData({ ...formData, [field]: value });

  // Step names to be used in ProgressBar
  const stepNames = [
    "Personal Details",
    "Contact Details",
    "Financial Info",
    "Identity Verification",
    "Summary"
  ];

  const steps = [
    <PersonalDetails
      formData={formData}
      onChange={handleChange}
      onNext={handleNext}
    />,
    <ContactDetails
      formData={formData}
      onChange={handleChange}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <FinancialInfo
      formData={formData}
      onChange={handleChange}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <IdentityVerification
      formData={formData}
      onChange={handleChange}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <Summary formData={formData} onBack={handleBack} />,
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row">
        {/* ProgressBar Section */}
        <ProgressBar steps={stepNames} currentStep={currentStep} />

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">
            {stepNames[currentStep - 1]}
          </h1>

          {/* Step Components */}
          <div className="mt-6">{steps[currentStep - 1]}</div>

          {/* Navigation Buttons */}
        
        </div>

        {/* Info Card */}
        <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6 md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">
            Potential interest rate discounts:
          </h3>
          <span className="text-xl font-extrabold text-red-400">0.50%</span>
          <p className="mt-2">
            See your discounted rates in a few steps! <br />
            Score another <span className="text-red-400 font-semibold">0.25%</span>{" "}
            interest rate discount by sending at least half <br />
            your hands directly to your credit card debt, if approved for a KYC
            loan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KYCForm;
