import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import GlobalContext from "./context/context";
import Header from "./components/Header/Header";
import Alert from "./Alert";
import Home from "./components/Home/Home";
import Chtonic from "./components/Characters/Chtonic";
import Olympian from "./components/Characters/Olympian";
import Other from "./components/Characters/Other";

function App() {
  const { alert } = useContext(GlobalContext);
  return (
    <div className="App">
      <Header />
      {alert ? <Alert /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chtonic" element={<Chtonic />}></Route>
        <Route path="/olympian" element={<Olympian />}></Route>
        <Route path="/other" element={<Other />}></Route>
      </Routes>
    </div>
  );
}

export default App;
