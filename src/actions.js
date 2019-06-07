const actionIncrement = () => ({type: "INC", payload: 1});
const actionDecrement = () => ({type: "DEC", payload: 1});
const actionRandom = (payload) => ({type: "RND", payload});

export {actionDecrement, actionIncrement, actionRandom};