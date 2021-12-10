// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.thirdColor};
    width: 40%;
    height: 17vh;
    border: 3px solid black;
    text-shadow: 1px 1px 5px white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 10%;
    height: 8vh;
    font-size: 1.3rem;
    color: ${(pr) => pr.theme.thirdColor};

    background-color: ${(pr) => pr.theme.primaryColor};
  }
`;

const Character = (props) => {
  console.log(props);
  const { info, openDetails } = props;

  return (
    <StyledChar>
      <h1>{props.info.name}</h1>
      <button onClick={() => openDetails(info.name)}>See details</button>

      {/* {props.info.name} */}
    </StyledChar>
  );
};

export default Character;
