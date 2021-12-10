// Write your Character component here
import React from "react";

const Character = (props) => {
  console.log(props);
  const { info, openDetails } = props;

  return (
    <div className="character">
      <h1>{props.info.name}</h1>;
      <button onClick={() => openDetails(info.name)}>See details</button>;
      {/* {props.info.name} */}
    </div>
  );
};

export default Character;
