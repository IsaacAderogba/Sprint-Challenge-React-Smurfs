import React from "react";

const Smurf = ({ name, age, height, id, deleteSmurf, selectSmurf }) => {
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>

      <div onClick={() => selectSmurf(id)}> Edit </div>
      <button onClick={() => deleteSmurf(id)}>x</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
