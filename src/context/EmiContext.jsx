// src/context/EMIContext.js
import React, { createContext, useReducer } from 'react';

// Initial State
const initialState = {
  principal: '',
  interestRate: '',
  tenure: '',
  monthlyEMI: 0,
  totalPayable: 0,
  totalInterest: 0,
};

// Create Context
export const EMIContext = createContext(initialState);

// Reducer
const emiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUES':
      const { principal, interestRate, tenure } = action.payload;

      const P = parseFloat(principal);
      const R = parseFloat(interestRate) / 12 / 100;
      const N = parseInt(tenure);

      const emi =
        (P * R * Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1);

      const totalPayable = emi * N;
      const totalInterest = totalPayable - P;

      return {
        ...state,
        principal,
        interestRate,
        tenure,
        monthlyEMI: parseFloat(emi.toFixed(2)),
        totalPayable: parseFloat(totalPayable.toFixed(2)),
        totalInterest: parseFloat(totalInterest.toFixed(2)),
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

// Provider Component
export const EMIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(emiReducer, initialState);

  const setEMIValues = (values) => {
    dispatch({ type: 'SET_VALUES', payload: values });
  };

  const resetEMI = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <EMIContext.Provider value={{ ...state, setEMIValues, resetEMI }}>
      {children}
    </EMIContext.Provider>
  );
};
