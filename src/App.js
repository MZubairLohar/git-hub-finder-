import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar.js'; 
import Users from './componants/user/Users.js';
import './App.css';

class App extends Component {
  render() {
  
    
  return (
    <div className="App" >
      <Navbar />
      <Users />
      
     
    </div>
  );
}
}

export default App;
