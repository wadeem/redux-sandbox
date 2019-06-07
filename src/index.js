import {createStore} from "redux";

console.log("hello world");

const reducer = (state = 0, action) => {
    if (action.type === "INC") {
        return state + 1;
    }
    return state;
};

const actionIncrement = {
    type: "INC"
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()));

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);

