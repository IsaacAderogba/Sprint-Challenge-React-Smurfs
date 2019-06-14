import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const smurfsApi = "http://localhost:3333/smurfs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      spinner: true,
      errorMessage: null
    };
  }

  componentDidMount = () => {
    this.fetchSmurfs();
  };

  fetchSmurfs = () => {
    axios
      .get(smurfsApi)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      })
      .finally(() => {
        this.setState({ spinner: false });
        console.log(this.state);
      });
  };

  postSmurf = (name, age, height) => {
    const newSmurf = { name, age, height };
    axios.post(smurfsApi, newSmurf).then(() => this.fetchSmurfs());
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm postSmurf={this.postSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
