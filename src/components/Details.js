import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(pr) => pr.theme.primaryColor};
  background-color: ${(pr) => pr.theme.thirdColor};

  p {
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.thirdColor};

    height: 17vh;
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
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        debugger;
      });
  }, [characterName]);

  return (
    <StyledCon>
      {details && (
        <>
          <ul>
            <p>Gender:{details.gender}</p>
            <p>Height:{details.height}</p>
            <p>Mass:{details.mass}</p>
            <p>BirthYear:{details.birth_year}</p>
            <p>Eye Color:{details.eye_color}</p>
            <p>Hair Color:{details.hair_color}</p>
            <p>Skin color:{details.skin_color}</p>
          </ul>
        </>
      )}
      <button onClick={close}>Close</button>
    </StyledCon>
  );
};
export default Details;
