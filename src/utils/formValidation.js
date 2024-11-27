// src/utils/formValidation.js

// Validate Personal Details
export const validatePersonalDetails = (formData) => {
    const errors = {};
  
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }
  
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required.";
    }
  
    if (!formData.nationality) {
      errors.nationality = "Nationality is required.";
    }
  
    if (!formData.gender) {
      errors.gender = "Gender is required.";
    }
  
    return errors;
  };
  
  // Validate Contact Details
  export const validateContactDetails = (formData) => {
    const errors = {};
  
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required.";
    }
  
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      errors.phoneNumber = "Valid phone number is required.";
    }
  
    if (!formData.residentialAddress.trim()) {
      errors.residentialAddress = "Residential Address is required.";
    }
  
    return errors;
  };
  
  // Validate Financial Information
  export const validateFinancialInfo = (formData) => {
    const errors = {};
  
    if (!formData.employmentStatus) {
      errors.employmentStatus = "Employment Status is required.";
    }
  
    if (!formData.annualIncome) {
      errors.annualIncome = "Annual Income is required.";
    }
  
    if (!formData.sourceOfIncome.trim()) {
      errors.sourceOfIncome = "Source of Income is required.";
    }
  
    return errors;
  };
  
  // Validate Identity Verification
  export const validateIdentityVerification = (formData) => {
    const errors = {};
  
    if (!formData.governmentIdType) {
      errors.governmentIdType = "Government ID Type is required.";
    }
  
    if (!formData.idNumber.trim()) {
      errors.idNumber = "ID Number is required.";
    }
  
    if (!formData.idDocument) {
      errors.idDocument = "ID Document is required.";
    }
  
    return errors;
  };
  
  // You can also add a final validation function for the Summary step
  export const validateSummary = (formData) => {
    const errors = {};
    
    // In the summary step, we generally don't need validation logic since it's just a review.
    // However, you can add additional checks if needed.
    
    return errors;
  };
  