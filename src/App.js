import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar.js'; 
import './App.css'; 

class App extends Component {
  render() {
    const name = "Zubair";
    const loading = false;
    const showName = true;
  return (
    <div className="App" >
      <Navbar />
      
     
    </div>
  );
}
}

export default App;
