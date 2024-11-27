const PersonalDetails = ({ formData, onChange, onNext }) => {
    return (
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 1: Personal Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={(e) => onChange("nationality", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <select
            value={formData.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button onClick={onNext} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    );
  };
  
  export default PersonalDetails;
  