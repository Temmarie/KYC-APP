import React, { useState } from "react";
import { validateFinancialInfo } from "../utils/formValidation";

const FinancialInfo = ({ formData, onChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateFinancialInfo(formData);
    if (Object.keys(validationErrors).length === 0) {
      onNext(); // Proceed to the next step if no errors
    } else {
      setErrors(validationErrors); // Show errors if validation fails
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Step 3: Financial Information</h2>
      <div className="space-y-4">
        {/* Employment Status */}
        <div>
          <select
            value={formData.employmentStatus}
            onChange={(e) => onChange("employmentStatus", e.target.value)}
            className={`w-full p-3 border ${
              errors.employmentStatus ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
          {errors.employmentStatus && (
            <p className="text-red-500 text-sm">{errors.employmentStatus}</p>
          )}
        </div>

        {/* Annual Income */}
        <div>
          <select
            value={formData.annualIncome}
            onChange={(e) => onChange("annualIncome", e.target.value)}
            className={`w-full p-3 border ${
              errors.annualIncome ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Annual Income</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value="20k-50k">$20,000 - $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
          {errors.annualIncome && (
            <p className="text-red-500 text-sm">{errors.annualIncome}</p>
          )}
        </div>

        {/* Source of Income */}
        <div>
          <input
            type="text"
            placeholder="Source of Income"
            value={formData.sourceOfIncome}
            onChange={(e) => onChange("sourceOfIncome", e.target.value)}
            className={`w-full p-3 border ${
              errors.sourceOfIncome ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.sourceOfIncome && (
            <p className="text-red-500 text-sm">{errors.sourceOfIncome}</p>
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

export default FinancialInfo;
