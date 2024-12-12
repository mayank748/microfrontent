import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  initialCounter: 0,
};

const SET_INCREMENTED_VALUE = 'SET_INCREMENTED_VALUE';
const SET_DECREMENT_VALUE = 'SET_DECREMENT_VALUE';

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCREMENTED_VALUE:
      return { ...state, initialCounter: state.initialCounter + 1 };
    case SET_DECREMENT_VALUE:
      return { ...state, initialCounter: state.initialCounter - 1 };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: sharedReducer,
  },
});

export default store;
