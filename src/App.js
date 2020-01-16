import React, { Component } from 'react';
import Header from './components/header/header'
import Main from './main'

class App extends Component {
  render() {
    return ( //aha
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
