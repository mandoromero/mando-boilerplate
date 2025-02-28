// Import necessary hooks from React-Redux
import { useSelector, useDispatch } from 'react-redux';
// Import actions from the counter slice
import { increment, decrement, incrementByAmount } from './redux/counterSlice';

function App() {
  // Get the counter value from the Redux store
  const count = useSelector((state) => state.counter.value);
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Redux + Vite Boilerplate</h1>

      {/* Display the current counter value */}
      <p className="text-2xl mt-4">Count: {count}</p>

      {/* Buttons to modify the counter */}
      <div className="flex space-x-4 mt-4">
        {/* Dispatch the increment action */}
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => dispatch(increment())}>
          Increment
        </button>
        {/* Dispatch the decrement action */}
        <button className="bg-red-500 px-4 py-2 rounded" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        {/* Dispatch the incrementByAmount action with a value of 5 */}
        <button className="bg-green-500 px-4 py-2 rounded" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
