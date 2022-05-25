import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../context/context";
import "./Admin.css";

function Login() {
  const { setAlert, setAlertMsg } = useContext(GlobalContext);
  const navigate = useNavigate();
  // state avec un objet prédéfini
  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // on vérifie que les champs sont remplis
    if (!login.mail) {
      setAlertMsg("Please provide your mail");
      setAlert(true);
    } else if (!login.password) {
      setAlertMsg("Please provide the password");
      setAlert(true);
    } else {
      try {
        await axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, login, {
            withCredentials: true,
          })
          // .then((resp) => {
          //   console.log(resp.data);
          // })
          .then(() => {
            navigate("../admin", { replace: true });
          });
      } catch (err) {
        // console.log(err.response.data);
        setAlertMsg(err.response.data);
        setAlert(true);
      }
    }
  };

  return (
    <div className="admin-container">
      <section className="login-container">
        <h2>LOGIN</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="mail">
            <input
              type="email"
              placeholder="MAIL"
              value={login.mail}
              // on rempli uniquement la valeur email en destructurant login
              onChange={(e) => setLogin({ ...login, mail: e.target.value })}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="PASSWORD"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </label>
          <button type="submit" className="button-login">
            SEND
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
