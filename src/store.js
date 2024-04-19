// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../src/features/employeesSlices'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
