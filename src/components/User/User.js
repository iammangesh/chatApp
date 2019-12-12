import React from 'react';

const User  = (props) => {
  return(
    <React.Fragment>
      <div className={props.active == props.index ? 'user-item selected' : 'user-item'} onClick={() => {
          props.selectUser(props.index)
        }}>
        <figure className="user-profile-photo">
          <img src="http://placehold.it/50x50"/>
        </figure>
        <div className="user-details">
          <span className="user-name">  { props.data.username }</span>
          <span className="user-last-message"> { props.data.last_typed_message }  </span>
        </div>
        <div className="user-meta-data">
          <span className="last-active-time">{ props.data.last_active_time }</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
