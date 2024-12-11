import { createStore } from 'react-redux';

const initialState = {
  initialValue: 0,
};

const SET_INCREMENTED_VALUE = 'SET_INCREMENTED_VALUE';

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INCREMENTED_VALUE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
