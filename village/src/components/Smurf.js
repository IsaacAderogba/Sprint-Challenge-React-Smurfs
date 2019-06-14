import React from "react";
import { Link } from "react-router-dom";

const Smurf = ({ name, age, height, id, deleteSmurf, selectSmurf, smurfs, match }) => {
  let smurf;

  if(match) {
    smurf = smurfs.find(sm => sm.id == match.params.id);
  }

  return (
    <div className="Smurf">
      <Link to={`/smurf/${match ? smurf.id : id}`}>
        <h3>{match ? smurf.name : name}</h3>
        <strong>{match ? smurf.height :height} tall</strong>
        <p>{match ? smurf.age : age} smurf years old</p>
      </Link>
      {match ? <div></div> : <Link to="/smurf-form"><button onClick={() => selectSmurf(id)}> Edit </button></Link>}
      {match ? <div></div> : <button onClick={() => deleteSmurf(match ? smurf.id : id)}>x</button>}
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
