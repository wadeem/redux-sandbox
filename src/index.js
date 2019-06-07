import {createStore} from "redux";
import reducer from "./reducer.js";
import {actionIncrement, actionDecrement, actionRandom} from "./actions.js";

console.log("hello world");

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

