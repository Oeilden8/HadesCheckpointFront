import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Characters.css";

function Other() {
  const [other, setOther] = useState([]);

  const getOther = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/characters/type/3`)
      .then((resp) => {
        // console.log(resp.data);
        return setOther(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOther();
  }, []);

  return (
    <div className="characters-container">
      {other.map((god) => (
        <section className="character-card">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/${god.source}`}
            alt={god.image_name}
          />
          <div className="spec">
            <h1>{god.name.toUpperCase()}</h1>
            <h2 className="oth-title">{god.title}</h2>
          </div>
          <p className="description">{god.description}</p>
        </section>
      ))}
    </div>
  );
}

export default Other;
