const FinancialInfo = ({ formData, onChange, onNext, onBack }) => {
    return (
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Step 3: Financial Information</h2>
        <div className="space-y-4">
          <select
            value={formData.employmentStatus}
            onChange={(e) => onChange("employmentStatus", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
          <select
            value={formData.annualIncome}
            onChange={(e) => onChange("annualIncome", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">Annual Income</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value="20k-50k">$20,000 - $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
          <input
            type="text"
            placeholder="Source of Income"
            value={formData.sourceOfIncome}
            onChange={(e) => onChange("sourceOfIncome", e.target.value)}
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
  
  export default FinancialInfo;
  