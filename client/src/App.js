import React, { Component } from 'react';
import { Logo, Header } from './components';
import ChatContainer from './components/ChatContainer';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <ChatContainer />
      </>
    );
  }
}

export default App;
