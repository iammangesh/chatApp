// app code here
import React from 'react';
import "./sass/style.scss";
import ReactDOM from 'react-dom';
import ChatBox from './components/ChatBox';


class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="app">
          <ChatBox/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

ReactDOM.render(<App/>,document.querySelector('#app'));
