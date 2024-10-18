import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <h1>Name : {this.props.name} (Class)</h1>
        <h2>City : {this.props.city}</h2>
        <p>
          Hello there, I'm Currently Learning Via Building My First Project -
          Food Ordering App
        </p>
      </div>
    );
  }
}

export default UserClass;
