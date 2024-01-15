import { applyMiddleware, createStore } from "redux";

const INC = "inc";
import axios from "axios";

import { thunk } from "redux-thunk";

let current = {
  amount: 2,
};

const store = createStore(reducer, applyMiddleware(thunk.default));

function reducer(state = { amount: 2 }, { type, payload }) {
  if (type == INC) {
    // state.amount=state.amount+1; // if we do like that we mutate older state which is not good

    //so we have to immutable  ,  updates  immutable honi chaiye we have to make new copy
    // By  creating a new object, it's no longer the current actual state. You can mutate your new
    //object all you like. Upon returning it, Redux will replace the entire current state with the entire
    // new state.
    return { amount: 5 };
  }
}

// Action creators

const Inc = () => {
  return { type: INC, paylaod: 20 };
};

function Init(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);

    dispatch({ type: "add", paylaod: data.amount });
  };
}

store.dispatch(Inc());
store.dispatch(Init(2));
console.log(store.getState()); //  return { amount: 5 }
