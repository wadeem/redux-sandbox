import {createStore} from "redux";
import {actionIncrement, actionDecrement, actionRandom} from "./action-creators.js";

console.log("hello world");

const reducer = (state = 0, action) => {
    if (action.type === "INC") {
        return state + action.payload;
    } else if (action.type === "DEC") {
        return state - action.payload;
    } else if (action.type === "RND") {
        return state + action.payload;
    }
    return state;
};


const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
    document.getElementById("counter").innerText = store.getState();
});

document.getElementById("inc").addEventListener("click", () => {
    store.dispatch(actionIncrement())
});

document.getElementById("dec").addEventListener("click", () => {
    store.dispatch(actionDecrement())
});

document.getElementById("rnd").addEventListener("click", () => {
    const random = Math.floor(Math.random() * 10);
    store.dispatch(actionRandom(random));
});

