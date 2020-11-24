import PropTypes from "prop-types";
import Cookies from "js-cookie";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default class ChatInputForm extends React.Component {

    state = {
        username: "",
        text: ""
    };
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
    };

    componentDidMount() {
        axios
            .get("http://localhost:3000/user/" + Cookies.get("User"))
            .then((response) => {
                console.log(response);
                this.setState({ username: response.data.firstName });
            });
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.setState({
            text: "",
        });
    };

    render() {
        return ( <
            form onSubmit = { this.handleSubmit } >
            <
            div >
            <
            label htmlFor = "name" > Name: < /label>{" "} <
            input id = "name"
            type = "text"
            autoFocus = { true }
            required = { true }
            value = { this.state.username }
            onChange = { this.handleInputChange }
            readOnly /
            >
            <
            /div>{" "} <
            div >
            <
            label htmlFor = "text" > Message: < /label>{" "} <
            input id = "text"
            type = "text"
            required = { true }
            value = { this.state.text }
            onChange = { this.handleInputChange }
            />{" "} < /
            div > { " " } <
            div >
            <
            button type = "submit"
            disabled = { this.props.disabled } >
            Send { " " } <
            /button>{" "} < /
            div > { " " } <
            /form>
        );
    }
}