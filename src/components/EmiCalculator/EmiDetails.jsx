import React, { useContext } from 'react';
import { EMIContext } from '../../context/EmiContext';

const EMIDetails = () => {
  const {
    principal,
    interestRate,
    tenure,
    monthlyEMI,
    totalPayable,
    totalInterest,
  } = useContext(EMIContext);

  if (!monthlyEMI || !principal || !interestRate || !tenure) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6 text-center">
        💡 EMI Breakdown
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Principal */}
        <div>
          <p className="text-sm text-gray-500">Principal</p>
          <p className="text-lg font-semibold text-gray-800">
            ₹{Number(principal).toLocaleString()}
          </p>
        </div>

        {/* Interest Rate */}
        <div>
          <p className="text-sm text-gray-500">Interest Rate</p>
          <p className="text-lg font-semibold text-gray-800">{interestRate}%</p>
        </div>

        {/* Tenure */}
        <div>
          <p className="text-sm text-gray-500">Tenure</p>
          <p className="text-lg font-semibold text-gray-800">{tenure} months</p>
        </div>

        {/* Monthly EMI */}
        <div>
          <p className="text-sm text-gray-500">Monthly EMI</p>
          <p className="text-lg font-semibold text-green-600">
            ₹{monthlyEMI.toLocaleString()}
          </p>
        </div>

        {/* Total Payable */}
        <div>
          <p className="text-sm text-gray-500">Total Payable</p>
          <p className="text-lg font-semibold text-blue-600">
            ₹{totalPayable.toLocaleString()}
          </p>
        </div>

        {/* Total Interest */}
        <div>
          <p className="text-sm text-gray-500">Total Interest</p>
          <p className="text-lg font-semibold text-red-500">
            ₹{totalInterest.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMIDetails;
