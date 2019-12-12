import React from 'react';
import ListHeader from '../ListHeader';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatMessages = (props) =>  {
      return(
        <React.Fragment>
          <div className="chat-mesages">
            <ListHeader title="Messages"/>
            <div className="messages-list">
              {
                props.data.messages != undefined && props.data.messages.map((item,index) => <Message key={index} data={item}/>)
              }
            </div>
            <MessageInput sendMessage={props.sendMessage}/>
          </div>
        </React.Fragment>
      );
}

export default ChatMessages;
