import { useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

const ExpenseList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  const emiTransactions = transactions.filter((tx) => tx.isEmi);
  const totalEmi = emiTransactions.reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <div className="mt-6 max-w-md w-full mx-auto px-4">
      <h3 className="text-lg font-semibold text-indigo-700 mb-4">🧾 Transactions</h3>

      <ul className="space-y-3">
        {transactions.length === 0 ? (
          <li className="text-gray-500 text-sm">No transactions recorded.</li>
        ) : (
          transactions.map((tx) => (
            <li
              key={tx.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-3 rounded shadow hover:shadow-md transition duration-200"
            >
              <div className="flex-1 text-gray-800 text-sm sm:text-base truncate">
                {tx.text}
                {tx.isEmi && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                    EMI{tx.emiDuration ? ` - ${tx.emiDuration} mo` : ''}
                  </span>
                )}
              </div>

              <div className="flex items-center mt-2 sm:mt-0 sm:ml-4">
                <span
                  className={`text-sm font-semibold ${
                    tx.amount < 0 ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  ₹{tx.amount}
                </span>
                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => {
                    if (window.confirm(`Delete transaction "${tx.text}"?`)) {
                      deleteTransaction(tx.id);
                    }
                  }}
                  aria-label={`Delete transaction: ${tx.text}`}
                >
                  ❌
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {emiTransactions.length > 0 && (
        <div className="mt-6 bg-yellow-50 p-4 rounded shadow text-sm text-gray-800">
          <h4 className="font-semibold text-yellow-700 mb-2">📌 EMI Summary</h4>
          <p>Total EMI Transactions: {emiTransactions.length}</p>
          <p>Total EMI Amount: ₹{totalEmi.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
