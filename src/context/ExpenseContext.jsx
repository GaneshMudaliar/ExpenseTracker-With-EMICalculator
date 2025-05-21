
import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Initial State
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
};

// Create Context
export const ExpenseContext = createContext(initialState);

// Reducer Function
const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((tx) => tx.id !== action.payload),
      };
    default:
      return state;
  }
};

// Provider Component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: { id: uuidv4(), ...transaction },
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
