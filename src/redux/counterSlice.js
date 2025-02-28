// Import createSlice from Redux Toolkit to create a slice of the store
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState = {
  value: 0, // Initial count value
};

// Create a slice that includes reducers and actions
const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState, // Set initial state
  reducers: {
    // Define an action to increment the count
    increment: (state) => {
      state.value += 1;
    },
    // Define an action to decrement the count
    decrement: (state) => {
      state.value -= 1;
    },
    // Define an action to increment by a specific amount
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Use payload to increase count dynamically
    },
  },
});

// Export actions so components can use them
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Export the reducer so it can be added to the store
export default counterSlice.reducer;
