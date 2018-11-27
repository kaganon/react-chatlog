import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types'


const Messages = (props) => {

  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;

  let logLocation = '' ;
  logLocation = sender === "Vladimir" ? 'remote' : 'local';


  return (
    <section className={'chat-entry '+logLocation}>
      <section className="entry-body">
        <div className="entry-name"> {sender} </div>
        <div className="entry-bubble"> {body} </div>
        <div className="entry-time"> <Timestamp time={timeStamp}/> </div>
      </section>
    </section>
  );
};

Messages.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default Messages;
