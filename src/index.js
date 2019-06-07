import {createStore} from "redux";

console.log("hello world");

const reducer = (state = 0, action) => {
    if (action.type === "INC") {
        return state + action.value;
    } else if (action.type === "DEC") {
        return state - action.value;
    }
    return state;
};

const actionIncrement = {
    type: "INC",
    value: 1
};

const actionDecrement = {
    type: "DEC",
    value: 1
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
    document.getElementById("counter").innerText = store.getState();
});

document.getElementById("inc").addEventListener("click", () => {
    store.dispatch(actionIncrement)
});

document.getElementById("dec").addEventListener("click", () => {
    store.dispatch(actionDecrement)
});

