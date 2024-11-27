import React from "react";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col w-1/4 p-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full ${
                index < currentStep
                  ? "bg-blue-500 text-white"
                  : index === currentStep
                  ? "border-2 border-blue-500 text-blue-500"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            {/* Dashed Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-8 w-1 border-l-2 ${
                  index < currentStep - 1 ? "border-blue-500" : "border-gray-300"
                } border-dashed`}
              ></div>
            )}
          </div>

          {/* Step Label */}
          <div className="ml-2">
            <span
              className={`${
                index <= currentStep ? "font-semibold" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

