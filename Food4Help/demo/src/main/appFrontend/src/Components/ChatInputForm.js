import PropTypes from "prop-types";
import Cookies from "js-cookie";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "../HP/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import borders from "@material-ui/system";
export default class ChatInputForm extends React.Component {
    state = {
        username: "",
        text: "",
        receiver: "",
        sections: [
            { title: "Home Page", url: "/" },
            { title: "About Us", url: "/aboutus" },
            { title: "What we do", url: "/whatwedo" },
            { title: "Companies Page", url: "/company" },
        ],
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
            >
            <
            Container maxWidth = "lg" >
            <
            Header title = "Chat"
            sections = { this.state.sections }
            />{" "} <
            /Container>{" "} <
            form onSubmit = { this.handleSubmit } >
            <
            Container maxWidth = "lg"
            m = "auto"
            style = {
                { float: "center" } } >
            <
            Box m = "auto"
            padding = "30px"
            border = { 1 }
            borderColor = "primary.main"
            bgcolor = "#00BCD4"
            borderRadius = "borderRadius" >
            <
            div style = {
                {
                    display: "inline",
                    float: "center",
                    marginLeft: "120px",
                }
            } >
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
            div style = {
                {
                    display: "inline",
                    float: "center",
                    marginLeft: "80px",
                }
            } >
            <
            label htmlFor = "receiver" > To: < /label>{" "} <
            input id = "receiver"
            type = "text"
            required = { true }
            value = { this.state.receiver }
            onChange = { this.handleInputChange }
            />{" "} <
            /div>{" "} <
            div style = {
                {
                    display: "inline",
                    float: "center",
                    marginLeft: "80px",
                }
            } >
            { " " } <
            label htmlFor = "text" > Message: < /label>{" "} <
            input id = "text"
            type = "text"
            required = { true }
            value = { this.state.text }
            onChange = { this.handleInputChange }
            />{" "} <
            /div>{" "} <
            div style = {
                {
                    display: "inline",
                    float: "center",
                    marginLeft: "80px",
                }
            } >
            <
            button type = "submit"
            disabled = { this.props.disabled } >
            Send { " " } <
            /button>{" "} <
            /div>{" "} <
            /Box>{" "} <
            /Container>{" "} <
            /form>{" "} <
            />
        );
    }
}