import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.selectedSmurf ? props.selectedSmurf.name : "",
      age: props.selectedSmurf ? props.selectedSmurf.age : "",
      height: props.selectedSmurf ? props.selectedSmurf.height : ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    if (this.props.selectedSmurf) {
      this.props.updateSmurf(
        this.props.selectedSmurf.id,
        this.state.name,
        this.state.age,
        this.state.height
      );
    } else {
      this.props.postSmurf(this.state.name, this.state.age, this.state.height);
    }
    this.props.history.push("/");

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            required
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            required
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            required
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
            {this.props.selectedSmurf ? "Update smurf" : "Add to the village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
