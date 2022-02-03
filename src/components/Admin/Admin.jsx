import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../context/context";
import "./Admin.css";

function Admin() {
  const { setAlert, setAlertMsg } = useContext(GlobalContext);
  const [images, setImages] = useState([]);
  const [character, setCharacter] = useState({
    name: "",
    title: "",
    power: "",
    description: "",
    type_id: "",
    image_id: "",
  });

  const getAllImages = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/images`)
      .then((resp) => {
        console.log("images", resp.data);
        return setImages(resp.data);
      });
  };

  const handleCharacterSubmit = async (e) => {
    console.log(character);
    e.preventDefault();
    if (!character.name) {
      setAlertMsg("Please provide a name");
      setAlert(true);
    } else if (!character.type_id) {
      setAlertMsg("Please choose a type");
      setAlert(true);
    } else {
      try {
        await axios
          .post(
            `${process.env.REACT_APP_BACKEND_URL}/api/characters`,
            character,
            {
              withCredentials: true,
            }
          )
          .then((resp) => {
            console.log(resp);
            setAlertMsg("New character created");
            setAlert(true);
          });
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="admin-container">
      <h1>CREATE YOUR OWN CHARACTER</h1>
      <form className="new" onSubmit={handleCharacterSubmit}>
        <label htmlFor="select-type">
          <select name="type">
            <option
              value="Chtonic"
              onClick={() => setCharacter({ ...character, type_id: 1 })}
            >
              CHTONIC
            </option>
            <option
              value="Olympian"
              onClick={() => setCharacter({ ...character, type_id: 2 })}
            >
              OLYMPIAN
            </option>
            <option
              value="Other"
              onClick={() => setCharacter({ ...character, type_id: 3 })}
            >
              OTHER
            </option>
          </select>
        </label>
        <label htmlFor="name">
          <input
            type="text"
            placeholder="Name"
            value={character.name}
            onChange={(e) =>
              setCharacter({ ...character, name: e.target.value })
            }
          />
        </label>
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Title"
            value={character.title}
            onChange={(e) =>
              setCharacter({ ...character, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="power">
          <input
            type="text"
            placeholder="Power"
            value={character.power}
            onChange={(e) =>
              setCharacter({ ...character, power: e.target.value })
            }
          />
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="DESCRIPTION"
            value={character.description}
            onChange={(e) =>
              setCharacter({ ...character, description: e.target.value })
            }
          />
        </label>
        <label htmlFor="select-image">
          <select name="image">
            <option>Choose a picture</option>
            {images.map((image) => (
              <option
                value={image.id}
                onClick={(e) => {
                  setCharacter({ ...character, image_id: e.target.value });
                }}
              >
                {image.image_name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Admin;
