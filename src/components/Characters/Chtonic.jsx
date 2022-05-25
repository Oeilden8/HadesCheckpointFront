import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Characters.css";

function Chtonic() {
  const [chtonic, setChtonic] = useState([]);

  const getChtonic = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/characters/type/1`)
      .then((resp) => {
        // console.log(resp.data);
        return setChtonic(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChtonic();
  }, []);

  return (
    <div className="characters-container">
      {chtonic.map((god) => (
        <section className="character-card">
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/${god.source}`}
            alt={god.image_name}
          />
          <div className="spec">
            <h1>{god.name.toUpperCase()}</h1>
            <h2 className="c-title">{god.title}</h2>
            <h3>Powers :</h3>
            <p>{god.power}</p>
          </div>
          <p className="description">{god.description}</p>
        </section>
      ))}
    </div>
  );
}

export default Chtonic;
