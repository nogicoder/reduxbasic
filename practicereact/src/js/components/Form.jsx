import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import addArticle from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle:  (article) => dispatch(addArticle(article))
    };
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = uuidv1();
        this.props.addArticle({title: this.state.title, id: id})
        console.log({ title: this.state.title, id: id });
        this.setState({title: ""});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <button type="submit">Add New Article</button>
          </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(Form);