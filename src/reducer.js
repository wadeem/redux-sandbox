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

export default reducer;