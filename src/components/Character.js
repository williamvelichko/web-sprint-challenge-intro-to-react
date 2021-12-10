// Write your Character component here
import React from "react";

const Character = (props) => {
  console.log(props);
  const { info, openDetails } = props;

  return (
    <div className="character">
      {props.info.name}
      <button onClick={() => openDetails(info.name)}>See details</button>
    </div>
  );
};

export default Character;
