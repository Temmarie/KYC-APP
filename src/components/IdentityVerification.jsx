import React, { useState } from "react";
import { validateIdentityVerification } from "../utils/formValidation";

const IdentityVerification = ({ formData, onChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateIdentityVerification(formData);
    if (Object.keys(validationErrors).length === 0) {
      onNext(); // Proceed to the next step if no errors
    } else {
      setErrors(validationErrors); // Show errors if validation fails
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Step 4: Identity Verification</h2>
      <div className="space-y-4">
        {/* Government ID Type */}
        <div>
          <select
            value={formData.governmentIdType}
            onChange={(e) => onChange("governmentIdType", e.target.value)}
            className={`w-full p-3 border ${
              errors.governmentIdType ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select ID Type</option>
            <option value="Passport">Passport</option>
            <option value="Driver’s License">Driver’s License</option>
            <option value="National ID">National ID</option>
          </select>
          {errors.governmentIdType && (
            <p className="text-red-500 text-sm">{errors.governmentIdType}</p>
          )}
        </div>

        {/* ID Number */}
        <div>
          <input
            type="text"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={(e) => onChange("idNumber", e.target.value)}
            className={`w-full p-3 border ${
              errors.idNumber ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.idNumber && (
            <p className="text-red-500 text-sm">{errors.idNumber}</p>
          )}
        </div>

        {/* ID Document */}
        <div>
          <input
            type="file"
            onChange={(e) => onChange("idDocument", e.target.files[0])}
            className={`w-full p-3 border ${
              errors.idDocument ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.idDocument && (
            <p className="text-red-500 text-sm">{errors.idDocument}</p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-300 text-black rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IdentityVerification;
