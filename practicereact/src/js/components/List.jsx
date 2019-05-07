import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    // The return value of store.getState() is passed in, not the store instance itself
    return {articles: state.articles};
}

function List({articles}) {
    // Use ES6 of passing in "{articles}" instead of passing in "props" and define props.articles after
    return (
        <ul>
            {/* Use map() on the "articles" array */}
            {articles.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default connect(mapStateToProps)(List);
