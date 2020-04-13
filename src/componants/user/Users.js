import React, { Component } from 'react';

class Users extends Component {
    state ={
        user: [
            {id: "1",
      login: "Sir Zeeshan Hanif",
      avatar_url:
        "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
      html_url: "https://github.com/zeeshanhanif",
            },
            
            {id: "2",
      login: "Sir Qasim Shabbir",
      avatar_url:
        "https://avatars1.githubusercontent.com/u/679678?s=400&v=4",
      html_url: "https://github.com/qasimshabbir",
            },
           
            {id: "3",
      login: "Muhammad Zubair",
      avatar_url:
        "https://avatars0.githubusercontent.com/u/57180013?s=400&u=452497d5fb385d3c31436b1384ffd92cbf3a4d9c&v=4",
      html_url: "https://github.com/MZubairLohar/",
            },
          
    //         {id: "4",
    //   login: "Sir Zeeshan Hanif",
    //   avatar_url:
    //     "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
    //   html_url: "https://github.com/zeeshanhanif",
    //         },
          
    //         {id: "5",
    //   login: "Sir Zeeshan Hanif",
    //   avatar_url:
    //     "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
    //   html_url: "https://github.com/zeeshanhanif",
    //         },
        
    //         {id: "6",
    //   login: "Sir Zeeshan Hanif",
    //   avatar_url:
    //     "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
    //   html_url: "https://github.com/zeeshanhanif",
    //         },

        ]

    }
    render() {
        return (
            <div>
                {this.state.user.map(user => <div key={user.id}>{user.login}</div>)}
            </div>
        )
    }
}

export default Users;
