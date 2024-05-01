// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../src/features/employeesSlices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees'] // Indique quelle partie du store tu veux persister
};

const persistedReducer = persistReducer(persistConfig, employeesReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
