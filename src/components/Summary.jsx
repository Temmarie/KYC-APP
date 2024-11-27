const Summary = ({ formData, onEdit, onSubmit }) => {
    return (
      <div className="p-6  rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 5: Summary and Review</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Personal Details Card */}
  <div className="p-6 bg-white rounded shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
    <p><strong>Full Name:</strong> {formData.fullName}</p>
    <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
    <p><strong>Nationality:</strong> {formData.nationality}</p>
    <p><strong>Gender:</strong> {formData.gender}</p>
    <button onClick={() => onEdit(1)} className="text-white bg-blue-500 p-1 px-2 rounded mt-2">Edit</button>
  </div>

  {/* Contact Details Card */}
  <div className="p-6 bg-white rounded shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
    <p><strong>Email Address:</strong> {formData.email}</p>
    <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
    <p><strong>Residential Address:</strong> {formData.residentialAddress}</p>
    <button onClick={() => onEdit(1)} className="text-white bg-blue-500 p-1 px-2 rounded mt-2">Edit</button>
  </div>

  {/* Financial Information Card */}
  <div className="p-6 bg-white rounded shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Financial Information</h3>
    <p><strong>Employment Status:</strong> {formData.employmentStatus}</p>
    <p><strong>Annual Income:</strong> {formData.annualIncome}</p>
    <p><strong>Source of Income:</strong> {formData.sourceOfIncome}</p>
    <button onClick={() => onEdit(1)} className="text-white bg-blue-500 p-1 px-2 rounded mt-2">Edit</button>
  </div>

  {/* Identity Verification Card */}
  <div className="p-6 bg-white rounded shadow-lg">
    <h3 className="text-xl font-semibold mb-2">Identity Verification</h3>
    <p><strong>Government ID Type:</strong> {formData.governmentIdType}</p>
    <p><strong>ID Number:</strong> {formData.idNumber}</p>
    <p><strong>ID Document:</strong> {formData.idDocument ? formData.idDocument.name : 'No document uploaded'}</p>
    <button onClick={() => onEdit(1)} className="text-white bg-blue-500 p-1 px-2 rounded mt-2">Edit</button>
  </div>
</div>

  
        <div className="mt-6 flex justify-between">
          <button onClick={onSubmit} className="px-6 py-3 bg-blue-500 text-white rounded">
            Submit
          </button>
          <button onClick={() => onEdit(5)} className="px-6 py-3 bg-gray-300 text-black rounded">
            Edit All
          </button>
        </div>
      </div>
    );
  };
  
  export default Summary;
  