// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../src/features/employeesSlices'; // Vérifie que le chemin d'importation est correct

export const store = configureStore({
  reducer: {
    employees: employeesReducer // Utilise un objet pour le reducer si tu prévois d'ajouter d'autres reducers à l'avenir
  },
});
