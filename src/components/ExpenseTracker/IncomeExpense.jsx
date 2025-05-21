import React, { useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

const IncomeExpenseSummary = () => {
  const { transactions } = useContext(ExpenseContext);

  const amounts = transactions.map((tx) => tx.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, val) => acc + val, 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, val) => acc + val, 0);

  const balance = income + expense;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-6 max-w-3xl mx-auto w-full">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6 text-center">
        💰 Financial Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 font-medium mb-1">Income</p>
          <p className="text-green-600 text-lg sm:text-xl font-bold">
            ₹{income.toLocaleString()}
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 font-medium mb-1">Expense</p>
          <p className="text-red-600 text-lg sm:text-xl font-bold">
            ₹{Math.abs(expense).toLocaleString()}
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 shadow-sm">
          <p className="text-gray-500 font-medium mb-1">Balance</p>
          <p className="text-indigo-700 text-lg sm:text-xl font-bold">
            ₹{balance.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseSummary;
