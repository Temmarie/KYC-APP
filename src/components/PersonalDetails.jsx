import countryList from "react-select-country-list";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import { validatePersonalDetails } from "../utils/formValidation";

const PersonalDetails = ({ formData, onChange, onNext }) => {
  const options = useMemo(() => countryList().getData(), []); // Memoize country list
  const [selectedCountry, setSelectedCountry] = useState(
    options.find((option) => option.value === formData.nationality) || null
  );

  const [errors, setErrors] = useState({});

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    onChange("nationality", selectedOption ? selectedOption.value : ""); // Update formData
  };

  const handleNext = () => {
    const validationErrors = validatePersonalDetails(formData);
    if (Object.keys(validationErrors).length === 0) {
      onNext(); // Proceed to the next step if no errors
    } else {
      setErrors(validationErrors); // Show errors if validation fails
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Details</h2>
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            className={`w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className={`w-full p-3 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Nationality Dropdown */}
        <div>
          <Select
            options={options}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Nationality"
            className="w-full"
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality}</p>
          )}
        </div>

        {/* Gender Dropdown */}
        <div>
          <select
            value={formData.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className={`w-full p-3 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
