import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar.js'; 
import Users from './componants/user/Users.js';
import axios from 'axios';
import './App.css';



class App extends Component {
  state = {
    users : [],
    loading : false
  }

  async componentDidMount(){
    const res = await axios.get('https://api.github.com./users');
    console.log(res.data);
  }
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
