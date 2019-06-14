import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Smurf = ({
  name,
  age,
  height,
  id,
  deleteSmurf,
  selectSmurf,
  smurfs,
  match
}) => {
  let smurf;

  if (match) {
    smurf = smurfs.find(sm => sm.id == match.params.id);
  }

  return (
    <StyledSmurf>
      <Link to={`/smurf/${match ? smurf.id : id}`}>
        <h3>{match ? smurf.name : name}</h3>
        <strong>{match ? smurf.height : height} tall</strong>
        <p>{match ? smurf.age : age} smurf years old</p>
      </Link>
      {match ? (
        <div />
      ) : (
        <Link to="/smurf-form">
          <button onClick={() => selectSmurf(id)}> Edit </button>
        </Link>
      )}
      {match ? (
        <div />
      ) : (
        <button onClick={() => deleteSmurf(match ? smurf.id : id)}>x</button>
      )}
    </StyledSmurf>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

const StyledSmurf = styled.div`
  max-width: 650px;
  padding: 16px 0;
  background-color: white;
  margin: 0 auto;
  border-radius: 8px;
  text-align: center;

  a {
    text-decoration: none;
    color: black;
  }

  button {
    font-size: 16px;
    padding: 4px 16px;
  }

  a button {
    background-color: #539dc1;
    color: white;
  }
`;

export default Smurf;
