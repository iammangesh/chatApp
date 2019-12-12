import React from 'react';

const Message  = (props) => {
  return(
    <React.Fragment>
      <div className={props.type == 'reverse' && props.type != null  ? 'message reverse' : 'message'}>
        <span className="message-time">22:19</span>
        <div className="message-wrap">
          <figure className="message-photo">
            <img src="http://placehold.it/40x40" alt="message"/>
          </figure>
          <div className="message-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien vel ex viverra aliquet. Sed sit amet enim in urna tincidunt cursus sed et diam.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Message;
