import React, { useState, useContext } from 'react';
import { EMIContext } from '../../context/EmiContext';

const EMICalculatorForm = () => {
  const { setEMIValues, resetEMI } = useContext(EMIContext);

  const [formData, setFormData] = useState({
    principal: '',
    interestRate: '',
    tenure: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { principal, interestRate, tenure } = formData;

    if (principal && interestRate && tenure) {
      setEMIValues({
        principal: parseFloat(principal),
        interestRate: parseFloat(interestRate),
        tenure: parseInt(tenure),
      });
    }
  };

  const handleReset = () => {
    setFormData({ principal: '', interestRate: '', tenure: '' });
    resetEMI();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-xl mx-auto my-10 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-700 text-center">
        📊 EMI Calculator
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Principal Amount */}
        <div>
          <label htmlFor="principal" className="block text-sm sm:text-base font-medium text-gray-700">
            Principal Amount (₹)
          </label>
          <input
            id="principal"
            type="number"
            name="principal"
            min="1000"
            step="100"
            value={formData.principal}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label htmlFor="interestRate" className="block text-sm sm:text-base font-medium text-gray-700">
            Annual Interest Rate (%)
          </label>
          <input
            id="interestRate"
            type="number"
            name="interestRate"
            step="0.01"
            value={formData.interestRate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Tenure */}
        <div>
          <label htmlFor="tenure" className="block text-sm sm:text-base font-medium text-gray-700">
            Tenure (months)
          </label>
          <input
            id="tenure"
            type="number"
            name="tenure"
            min="1"
            value={formData.tenure}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none"
          >
            Calculate EMI
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 focus:outline-none"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EMICalculatorForm;
