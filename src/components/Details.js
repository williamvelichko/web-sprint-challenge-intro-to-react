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

  return <></>;
};
export default Details;
