import React from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import ChatInputForm from "./Components/ChatInputForm";
import ChatMessageList from "./Components/ChatMessageList";

const WEBSOCKET_URL = "http://localhost:8080/ws";
// const RECONNECT_DELAY = 3 * 1000;

const PUBLIC_TOPIC = "/queue/";
const PUBLISH_ENDPOINT = "/app/chat";

export default class MessageApp extends React.Component {
  state = {
    connected: false,
    messages: []
  };

  componentDidMount() {
    this.createConnection();
  }

  createConnection = () => {
    let connectCallback = () => {
        //console.log('Connected'+frame);
      this.client.subscribe(PUBLIC_TOPIC, this.handleMessage);

      this.setState({
        connected: true
      });
    };

    // let errorCallback = () => {
    //   window.setTimeout(() => this.createConnection(), RECONNECT_DELAY);
    // };

    // Make sure previous connection is closed
    //this.closeConnection();

    // Create new StompJS client
    var sock = new SockJS(WEBSOCKET_URL);
    this.client = Stomp.over(sock);
    //this.client.connect({}, connectCallback, errorCallback);
    sock.onopen = function(){
    console.log('open')};
    this.client.connect({},connectCallback)
  };

  closeConnection = () => {
    if (this.client) {
      this.client.disconnect();
      this.client = null;
    }

    this.setState({
      connected: false
    });
  };

  handleMessage = (payload) => {
    if (payload.body) {
      this.setState((prevState) => ({
        messages: [...prevState.messages, JSON.parse(payload.body)]
      }));
    }
  };

  publishMessage = (payload) => {
    if (this.client) {
      this.client.send(PUBLISH_ENDPOINT, {}, JSON.stringify(payload));
    }
  };

  componentWillUnmount() {
    this.closeConnection();
  }

  render() {
    return (
      <div className="app">
        {!this.state.connected && (
          <div className="not-connected">
            <h1>You're not connected to WS server :(</h1>
          </div>
        )}

        <ChatInputForm
          onSubmit={this.publishMessage}
          disabled={!this.state.connected}
        />

        <ChatMessageList messages={this.state.messages} />
      </div>
    );
  }
}