import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default class ChatMessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string,
                receiver: PropTypes.string,
            })
        ),
    };

    render() {
        return ( <
            Container maxWidth = "lg" >
            <
            Box m = "auto"
            style = {
                { float: "center", margin: "30px" } }
            display = "flex"
            flexDirection = "row"
            p = { 1 }
            m = { 1 } >
            <
            ul className = "message-list"
            type = "none" > { " " } {
                this.props.messages.map((message, index) => ( <
                    >
                    <
                    li key = { index }
                    style = {
                        { float: "center", margin: "30px" } } > { " " } <
                    b > { message.username } < /b> <br / >
                    <
                    i > { message.text } < /i>{" "} <
                    /li>{" "} <
                    />
                ))
            } { " " } <
            /ul>{" "} <
            /Box>{" "} <
            /Container>
        );
    }
}