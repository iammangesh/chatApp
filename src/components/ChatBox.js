import React from 'react';
import UsersList from './UsersList';
import ChatMessages from './ChatMessages/ChatMessages';
import {data} from './data';

class ChatBox extends React.Component {
  state = {
    users:data,
    seletedUser:data[0]
  }

  setSeletedUser = (index) => {
    debugger;
    this.setState({
      seletedUser:this.state.users[index],
      selectedIndex:index
    });
  }
  render() {
    return(
      <React.Fragment>
        <section className="chat-box">
          <div className="chat-box-col">
            <UsersList active={this.state.index} users={this.state.users} selectUser={this.setSeletedUser}/>
          </div>
          <div className="chat-box-col">
            <ChatMessages data={this.state.seletedUser}/>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ChatBox;
