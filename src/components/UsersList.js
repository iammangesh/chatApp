import React from 'react';
import ListHeader from './ListHeader';
import User from './User/User';

class UserList extends React.Component {

  render() {
    return(
      <React.Fragment>
        <ListHeader title="lorem ipsum"/>
        <div className="user-list">
          {
            this.props.users != undefined && this.props.users.map((item,index) => <User key={index} index={index} active={this.props.active}   selectUser={this.props.selectUser} data={item}/>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
