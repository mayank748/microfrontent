import { createStore } from 'redux';

const initialState = {
  initialCounter: 0,
};

const SET_INCREMENTED_VALUE = 'SET_INCREMENTED_VALUE';

const sharedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCREMENTED_VALUE:
      return { ...state, initialCounter: action.payload };
    default:
      return state;
  }
};

export const sendIncremntedValue = (data) => ({
  type: SET_INCREMENTED_VALUE,
  payload: data,
});

const App = createStore(sharedReducer);
export default App;
