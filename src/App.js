import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
 import Button from 'react-bootstrap/Button';



function BotApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
      <button onClick={false}>
                {/* <FontAwesomeIcon icon={faCommentDots} /> */}
              </button>
    </div>
  );
}

export default BotApp;
