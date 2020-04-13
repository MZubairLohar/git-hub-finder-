import React, { Component } from "react";

export class Useritem extends Component {
state = {
      id: "id",
      login: "Sir Zeeshan Hanif",
      avatar_url:
        "https://avatars2.githubusercontent.com/u/1311782?s=400&u=4b0e53d7ce7765fa39606af1a6bf30ecc3840562&v=4",
      html_url: "https://github.com/zeeshanhanif",
    
  }

  render() {
      const {id, login , avatar_url , html_url} = this.state;  // this var will help to remove extra this.state code from component
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
