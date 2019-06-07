import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer.js";
import * as actions from "./actions.js";

console.log("hello world");

const store = createStore(reducer);
const {dispatch} = store;
const {increment, decrement, random} = bindActionCreators(actions, dispatch);

store.subscribe(() => {
    console.log(store.getState());
    document.getElementById("counter").innerText = store.getState();
});

document.getElementById("inc").addEventListener("click", increment);
document.getElementById("dec").addEventListener("click", decrement);
document.getElementById("rnd").addEventListener("click", () => random(Math.floor(Math.random() * 10)));

