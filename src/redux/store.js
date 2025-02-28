// Import Redux Toolkit's configureStore function
import { configureStore } from '@reduxjs/toolkit';
// Import the counter reducer to include in the store
import counterReducer from './counterSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer under the 'counter' slice
  },
});

