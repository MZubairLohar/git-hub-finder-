// import React, { Component } from 'react';
// import Navbar from './components/layout/Navbar';
// import User from './components/users/User';
// import Users from './components/users/Users';
// import Search from './components/users/Search';
// import axios from 'axios';
// import './App.css';


// class App extends Component {
  
//     state ={
//       users: [],
//       user: {},
//       repos: [],
//       loading: false,
//     };


    
//     async componentDidMount(){
//       this.setState({loading: true});
     
//       const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       this.setState({ users: res.data, loading: false});
//     };

//     searchUsers = async text => {
//      // this.setState({loading: true });
//      const res = await axios.get(
//         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       this.setState({users: res.data.items, laoding: false });
//     };

//     render() {
//     return (
//       <div className='App'>
//         <Navbar />
//         <div className='container'>
//           <Search searchUsers={this.searchUsers}/>
//         <Users loading={this.state.loading} users={this.state.users}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;