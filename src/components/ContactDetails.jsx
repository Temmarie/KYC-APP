const ContactDetails = ({ formData, onChange, onNext, onBack }) => {
    return (
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4"> Step2. Contact Details</h2>
        <p className="text-gray-400"> Providing your contact details helps us communicate with you.</p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => onChange("phoneNumber", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Residential Address"
            value={formData.residentialAddress}
            onChange={(e) => onChange("residentialAddress", e.target.value)}
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
  
  export default ContactDetails;
  