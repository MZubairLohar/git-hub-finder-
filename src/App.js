import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar.js'; 
import UserItem from './componants/users/Useritem';
import './App.css';

class App extends Component {
  render() {
    const name = "Zubair";
    const loading = false;
    const showName = true;
  return (
    <div className="App" >
      <Navbar />
      <UserItem />
      
     
    </div>
  );
}
}

export default App;
