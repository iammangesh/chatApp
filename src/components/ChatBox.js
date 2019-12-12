import React from 'react';
import UsersList from './UsersList';
import ChatMessages from './ChatMessages/ChatMessages';
import {data} from './data';

class ChatBox extends React.Component {
  state = {
    users:data,
    seletedUser:data[0],
    selectedIndex:0
  }

  setSeletedUser = (index) => {
    this.setState({
      seletedUser:this.state.users[index],
      selectedIndex:index
    });
  }
  sendMessage = (message) => {
    
  }
  render() {
    return(
      <React.Fragment>
        <section className="chat-box">
          <div className="chat-box-col">
            <UsersList active={this.state.selectedIndex} users={this.state.users} selectUser={this.setSeletedUser}/>
          </div>
          <div className="chat-box-col">
            <ChatMessages sendMessage={this.sendMessage} data={this.state.seletedUser}/>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ChatBox;
