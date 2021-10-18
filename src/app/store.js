import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { dis } from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    products: counterReducer,
  },
});

store.dispatch(dis())
