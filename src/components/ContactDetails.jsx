import React, { useState } from "react";
import { validateContactDetails } from "../utils/formValidation";

const ContactDetails = ({ formData, onChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const validationErrors = validateContactDetails(formData);
    if (Object.keys(validationErrors).length === 0) {
      onNext(); // Proceed to the next step if no errors
    } else {
      setErrors(validationErrors); // Show errors if validation fails
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Step 2: Contact Details</h2>
      <p className="text-gray-400">
        Providing your contact details helps us communicate with you.
      </p>
      <div className="space-y-4">
        {/* Email Address */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => onChange("phoneNumber", e.target.value)}
            className={`w-full p-3 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Residential Address */}
        <div>
          <textarea
            placeholder="Residential Address"
            value={formData.residentialAddress}
            onChange={(e) => onChange("residentialAddress", e.target.value)}
            className={`w-full p-3 border ${
              errors.residentialAddress ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.residentialAddress && (
            <p className="text-red-500 text-sm">{errors.residentialAddress}</p>
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

export default ContactDetails;
