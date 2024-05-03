
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // État initial
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // Manipulation des etats
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    // ZONE A ASSOCIE AVEC UNE FUTUR PERSISTENCE 
    // removeEmployee: (state, action) => {
    //   state.employees = state.employees.filter(emp => emp.id !== action.payload.id);
    // },
  },
});

export const { addEmployee } = employeesSlice.actions; // Exporte une ou des actions

export default employeesSlice.reducer; //export pour integration via le store
