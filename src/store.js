import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../src/features/employeesSlices'; 

export const store = configureStore({
  reducer: {
    // Associe le reducer contenu dans la slice
    employees: employeesReducer 
  },
});
