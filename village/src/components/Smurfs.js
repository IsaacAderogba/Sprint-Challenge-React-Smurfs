import React, { Component } from "react";
import styled from 'styled-components';

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <StyledSmurfs>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                selectSmurf={this.props.selectSmurf}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </StyledSmurfs>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const StyledSmurfs = styled.form`
    max-width: 650px;
    width: 650px;
    padding: 25px;
    background-color: white;
    margin: 0 auto;
    border-radius: 8px;
    text-align: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-right: 32px;
    }
`;

export default Smurfs;
