import React from 'react';

const Message  = (props) => {
  return(
    <React.Fragment>
      <div className={props.data.type == 'reverse' && props.data.type != null  ? 'message reverse' : 'message'}>
        <span className="message-time">{ props.data.message_time }</span>
        <div className="message-wrap">
          <figure className="message-photo">
            <img src="https://i.pravatar.cc/40" alt="message"/>
          </figure>
          <div className="message-text">
            { props.data.message_text }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Message;
