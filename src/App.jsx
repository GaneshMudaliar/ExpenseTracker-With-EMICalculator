import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ExpenseProvider } from './context/ExpenseContext';
import { EMIProvider } from './context/EmiContext';

import Navbar from './components/Layout/Navbar';
import ExpenseForm from './components/ExpenseTracker/ExpenseForm';
import ExpenseList from './components/ExpenseTracker/ExpenseList';
import IncomeExpenseSummary from './components/ExpenseTracker/IncomeExpense';
import EMICalculatorForm from './components/EmiCalculator/EmiForm';
import EMIDetails from './components/EmiCalculator/EmiDetails';
import Overview from './components/Dashboard/Overview';
import IncomeExpenseChart from './components/Dashboard/Charts';

function App() {
  return (
    <ExpenseProvider>
      <EMIProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar always visible */}
            <Navbar />

            {/* Main content container */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">

              <Routes>
                {/* Home route: Summary + Chart + Expense form/list */}
                <Route
                  path="/"
                  element={
                    <div className="space-y-10">
                      {/* Summary and Chart Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <IncomeExpenseSummary />
                        <IncomeExpenseChart />
                      </div>

                      {/* Expense Form and List Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ExpenseForm />
                        <ExpenseList />
                      </div>
                    </div>
                  }
                />

                {/* EMI Calculator Route */}
                <Route
                  path="/emi"
                  element={
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <EMICalculatorForm />
                      <EMIDetails />
                    </div>
                  }
                />

                {/* Dashboard Route */}
                <Route
                  path="/dashboard"
                  element={
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                      <Overview />
                    </div>
                  }
                />

                {/* 404 Fallback */}
                <Route
                  path="*"
                  element={
                    <div className="text-center text-red-600 text-xl font-semibold mt-10">
                      404 - Page Not Found
                    </div>
                  }
                />
              </Routes>

            </main>
          </div>
        </Router>
      </EMIProvider>
    </ExpenseProvider>
  );
}

export default App;
