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
            this.props.users != undefined && this.props.users.map((item,index) => <User key={index} data={item}/>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
