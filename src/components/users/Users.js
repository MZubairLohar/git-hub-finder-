import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
   state={
        users: [
            {
                id: "1",
                login: "Zubair",
                avatar_url:
                  "https://avatars0.githubusercontent.com/u/57180013?s=400&u=452497d5fb385d3c31436b1384ffd92cbf3a4d9c&v=4",
                htnl_url: "https://github.com/MZubairLohar/",
              },
              {
                id: "2",
                login: "Ashir",
                avatar_url:
                  "https://avatars0.githubusercontent.com/u/40725533?s=400&u=fd6942d2a702edaacba03d88889ceb8256462b44&v=4",
                htnl_url: "https://github.com/masTechDeveloper?tab=repositories",
              },
              {
                id: "3",
                login: "Sir Zeeshan",
                avatar_url:
                  "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
                htnl_url: "https://github.com/zeeshanhanif",
              },
        ]
   }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map((user) => (
                    <UserItem key={user.id} user={user} ></UserItem>
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '3rem',
  };
export default Users;