import React, { Component } from "react";
import styled from "styled-components";

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
      <StyledSmurfForm onSubmit={this.addSmurf}>
        <h1>Smurf Builder</h1>
        <div>
          <p>Name:</p>
          <input
            required
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
        </div>
        <div>
          <p>Age:</p>
          <input
            required
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
        </div>
        <div>
          <p>Height:</p>
          <input
            required
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
        </div>
        <button type="submit">
          {this.props.selectedSmurf ? "Update smurf" : "Add to the village"}
        </button>
      </StyledSmurfForm>
    );
  }
}

const StyledSmurfForm = styled.form`
    max-width: 650px;
    width: 650px;
    padding: 25px;
    background-color: white;
    margin: 0 auto;
    border-radius: 8px;
    div {
        display: flex;
        align-items: center;

        p {
            flex-basis: 150px;
        }

        input {
            flex-basis: 450px
            height: 20px;
            padding-left: 8px;
        }
    }

    button {
        width: 300px;
        padding: 8px 0px;
        font-size: 16px;
        background-color: #539dc1;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
`;

export default SmurfForm;
