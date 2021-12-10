import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <div className="container">
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
    </div>
  );
};
export default Details;
