import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {
  const { addTransaction } = useContext(ExpenseContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [isEmi, setIsEmi] = useState(false);
  const [emiDuration, setEmiDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || isNaN(parseFloat(amount))) {
      alert('Please enter a valid transaction name and amount.');
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      text: text.trim(),
      amount: parseFloat(amount),
      isEmi,
      emiDuration: isEmi ? parseInt(emiDuration) || null : null,
      date: new Date().toISOString(),
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setIsEmi(false);
    setEmiDuration('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 md:p-10 rounded shadow-md max-w-md w-full mx-auto mt-6 md:mt-10"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700 mb-4 text-center">
        ➕ Add New Transaction
      </h2>

      <div className="mb-4">
        <label htmlFor="transactionText" className="block text-sm font-medium text-gray-700 mb-1">
          Transaction Name
        </label>
        <input
          id="transactionText"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="e.g., Salary, EMI Payment"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="transactionAmount" className="block text-sm font-medium text-gray-700 mb-1">
          Amount <span className="text-xs text-gray-500">(Use - for expenses, + for income)</span>
        </label>
        <input
          id="transactionAmount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="e.g., -500 or 2000"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="isEmi"
          checked={isEmi}
          onChange={(e) => setIsEmi(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="isEmi" className="text-sm text-gray-600">
          Mark as EMI
        </label>
      </div>

      {isEmi && (
        <div className="mb-4">
          <label htmlFor="emiDuration" className="block text-sm font-medium text-gray-700 mb-1">
            EMI Duration (months)
          </label>
          <input
            id="emiDuration"
            type="number"
            value={emiDuration}
            onChange={(e) => setEmiDuration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="e.g., 6"
            min="1"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default ExpenseForm;
