import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Navbar from "./components/Navbar";

const smurfsApi = "http://localhost:3333/smurfs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: null,
      spinner: true,
      errorMessage: null,
      selectedSmurf: null
    };
  }

  componentDidMount = () => {
    this.fetchSmurfs();
  };

  selectSmurf = id => {
    this.setState({
      selectedSmurf: this.state.smurfs.find(smurf => smurf.id === id)
    });
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

  deleteSmurf = id => {
    axios.delete(`${smurfsApi}/${id}`).then(() => this.fetchSmurfs());
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    if (this.state.spinner) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state)
      return (
        <div className="App">
          <Navbar />
          {this.state.smurfs && (
            <Route
              exact
              path="/"
              render={routeProps => (
                <Smurfs
                  {...routeProps}
                  smurfs={this.state.smurfs}
                  selectSmurf={this.selectSmurf}
                  deleteSmurf={this.deleteSmurf}
                />
              )}
            />
          )}
          <Route
            path="/smurf-form"
            render={routeProps => (
              <SmurfForm {...routeProps} postSmurf={this.postSmurf} />
            )}
          />
        </div>
      );
    }
  }
}

export default App;
