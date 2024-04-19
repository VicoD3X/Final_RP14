
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload.id);
    },
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
