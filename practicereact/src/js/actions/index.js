import React from "react";


function addArticle(payload) {
    return {
        type: "ADD_ARTICLE",
        payload
    };
};

export default addArticle;