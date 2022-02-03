import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import GlobalContext from "./context/context";
import Header from "./components/Header/Header";
import Alert from "./Alert";
import Home from "./components/Home/Home";

function App() {
  const { alert } = useContext(GlobalContext);
  return (
    <div className="App">
      <Header />
      {alert ? <Alert /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
