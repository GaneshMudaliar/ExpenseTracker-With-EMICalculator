import React from 'react';
import IncomeExpenseSummary from '../ExpenseTracker/IncomeExpense';
import IncomeExpenseChart from '../Dashboard/Charts';
import ExpenseList from '../ExpenseTracker/ExpenseList';
import EMIDetails from '../EmiCalculator/EmiDetails';

const Overview = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-12 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-700 text-center mb-8">
        📊 Financial Overview
      </h1>

      {/* Summary & Chart Section */}
      <div className="space-y-6">
        <IncomeExpenseSummary />
        <IncomeExpenseChart />
      </div>

      {/* Transactions & EMI*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Transactions Panel */}
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            🧾 Recent Transactions
          </h2>
          <ExpenseList />
        </div>

        {/* EMI Panel */}
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            🏦 EMI Summary
          </h2>
          <EMIDetails />
        </div>
      </div>
    </div>
  );
};

export default Overview;
