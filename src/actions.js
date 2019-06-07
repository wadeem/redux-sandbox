const increment = () => ({type: "INC", payload: 1});
const decrement = () => ({type: "DEC", payload: 1});
const random = (payload) => ({type: "RND", payload});

export {decrement, increment, random};