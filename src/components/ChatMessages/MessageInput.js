import React from 'react';


class MessageInput  extends React.Component {
  state = {
    message:''
  }
  getMessage = (e) => {
    this.setState({
      message:e.target.value
    });
  }
  render(){
    return(
      <React.Fragment>
      <div className="list-head">
        <input type="text" placeholder="type message here..." onChange={this.getMessage}/>
        <a href="#" className="icon"  onClick={(e) => {
            e.preventDefault();
            let message = {
              message_text:this.state.message,
              message_time:'40:20',
              username:'',
              type:null
            }
            this.props.sendMessage(message)
          }} >Send</a>
      </div>
      </React.Fragment>
    );
  }
}

export default MessageInput;
