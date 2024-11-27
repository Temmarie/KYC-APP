const IdentityVerification = ({ formData, onChange, onNext, onBack }) => {
    return (
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 4: Identity Verification</h2>
        <div className="space-y-4">
          <select
            value={formData.governmentIdType}
            onChange={(e) => onChange("governmentIdType", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">Select ID Type</option>
            <option value="Passport">Passport</option>
            <option value="Driver’s License">Driver’s License</option>
            <option value="National ID">National ID</option>
          </select>
          <input
            type="text"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={(e) => onChange("idNumber", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="file"
            onChange={(e) => onChange("idDocument", e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={onBack} className="px-6 py-3 bg-gray-300 text-black rounded">
            Back
          </button>
          <button onClick={onNext} className="px-6 py-3 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default IdentityVerification;
  