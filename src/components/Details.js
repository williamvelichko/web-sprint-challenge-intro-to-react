import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCon = styled.div`
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(pr) => pr.theme.primaryColor};
  }
  p {
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.thirdColor};
    width: 300px;
    height: 6vh;
    border: 3px solid black;
    text-shadow: 1px 1px 5px white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Details = (props) => {
  const { characterName, close } = props;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?${characterName}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        debugger;
      });
  }, [characterName]);

  return (
    <StyledCon className="container">
      <>
        <ul>
          <p>Gender:{props.details.gender}</p>
          <p>Height:{props.details.height}</p>
          <p>Mass:{props.details.mass}</p>
          <p>BirthYear:{props.details.birth_year}</p>
          <p>Eye Color:{props.details.eye_color}</p>
          <p>Hair Color:{props.details.hair_color}</p>
          <p>Skin color:{props.details.skin_color}</p>
        </ul>
      </>

      <button onClick={close}>Close</button>
    </StyledCon>
  );
};
export default Details;
