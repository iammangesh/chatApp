import React from 'react';


class MessageInput  extends React.Component {
  render(){
    return(
      <React.Fragment>
      <div className="list-head">
        <textarea> </textarea>
        <a href="#" className="icon">Send</a>
      </div>
      </React.Fragment>
    );
  }
}

export default MessageInput;
