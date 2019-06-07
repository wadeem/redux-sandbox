import {createStore} from "redux";

console.log("hello world");

const reducer = (state = 0, action) => {
    if (action.type === "INC") {
        return state + action.value;
    }
    return state;
};

const actionIncrement = {
    type: "INC",
    value:1
};

const store = createStore(reducer);

store.subscribe(()=> console.log(store.getState()));

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);

