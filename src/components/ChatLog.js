import React from 'react';
import Messages from './Messages';

const ChatLog = (props) => {

  const chatMessages = props.messages;

  const chatlogData = chatMessages.map((message, i) => {
    return (<ul> <Messages key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/> </ul>)
  });

  return (
    <section className="chat-log">
      {chatlogData}
    </section>
  );
};


export default ChatLog;
