import React from 'react';
import Pusher from 'pusher-js/react-native';
import ChatView from './ChatView';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

var pusherConfig ={
  restServer: 'http://192.168.1.238:4000',
};

export default class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.pusher = new Pusher('d3a87ec6fd5b2ec2c208', {
      cluster: 'us2',
      encrypted: true
    });

    debugger;

    this.chatChannel = this.pusher.subscribe('chat');
    this.chatChannel.bind('pusher:subscription_succeeded', () => {
      this.chatChannel.bind('join', (data) => {
        this.handleJoin(data.name);
      });
      this.chatChannel.bind('part', (data) => {
        this.handlePart(data.name);
      });
      this.chatChannel.bind('message', (data) => {
        this.handleMessage(data.name, data.message);
      });
    });

    this.handleSendMessage = this.onSendMessage.bind(this);
  }

  handleJoin(name) {
    const messages = this.state.messages.slice();
    messages.push({action: 'join', name: name});
    this.setState({
      messages: messages
    });
  }
  handlePart(name) {
    const messages = this.state.messages.slice();
    messages.push({action: 'part', name: name});
    this.setState({
      messages: messages
    });
  }
  handleMessage(name, message) {
    const messages = this.state.messages.slice();
    messages.push({action: 'message', name: name, message: message});
    this.setState({
      messages: messages
    });
  }

  componentDidMount() {
    fetch(`${pusherConfig.restServer}/users/${this.props.name}`, {
      method: 'PUT'
    });
  }

  componentWillUnmount() {
    fetch(`${pusherConfig.restServer}/users/${this.props.name}`, {
      method: 'DELETE'
    });
  }

  onSendMessage(text) {
    const payload = {
        message: text
    };
    fetch(`${pusherConfig.restServer}/users/${this.props.name}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  }

  render() {
    const messages = this.state.messages;

    return (
        <ChatView messages={ messages } onSendMessage={ this.handleSendMessage } />
    );
  }
}
