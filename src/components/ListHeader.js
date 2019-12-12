import React from 'react';

const ListHeader = (props) => {
  return(
    <React.Fragment>
      <div className="list-head">
        <h2>{ props.title  }</h2>
        <a href="#" className="icon"></a>
      </div>
    </React.Fragment>
  );
}

export default ListHeader;
