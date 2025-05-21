import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { ExpenseContext } from '../../context/ExpenseContext';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeExpenseChart = () => {
  const { transactions } = useContext(ExpenseContext);

  const amounts = transactions.map(tx => tx.amount);
  const income = amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, a) => acc + a, 0);

  if (income === 0 && expense === 0) return null;

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: [income, Math.abs(expense)],
        backgroundColor: ['#4ade80', '#f87171'], // green, red
        borderColor: ['#22c55e', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ₹${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-indigo-700 mb-4 text-center">📊 Income vs Expense</h2>
      
      {/* Chart wrapper to control height on different screen sizes */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
