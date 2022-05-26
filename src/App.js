import React from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';
import './styles.css'
import 'react-chat-widget/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { getBot } from './http/getBot';
import './App.js'

function App() {
  const uuid = uuidv4();
  const handleNewUserMessage = (newMessage) => {
    getBot(newMessage, uuid).then((res) => {
      setTimeout(() => {
        addResponseMessage(res.data.directives[0].payload.text);
      }, 1000)
    }).catch((err) => {
      console.error("Error", err);
    });

  };
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="x-chat-ui"
        subtitle="embedded chat"
        // emojis="true"
        resizable="true"
      // profileAvatar="true"
      />

    </div>
  );
}

export default App;