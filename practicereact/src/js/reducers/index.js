import React from "react";

const initialState = {
    articles: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_ARTICLE") {
        return Object.assign({}, { articles: state.articles.concat(action.payload) });
    }
    return state;
}

export default rootReducer;