import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Module from "./Module";

function App() {
  const [modules, setModules] = useState([]);
  function getRandomModules() {
    const moduleArray = ["Discordjs", "Expressjs", "Reactjs", "Vuejs"];
    return moduleArray[Math.floor(Math.random() * moduleArray.length)];
  }
  const handlerClick = () => {
    setModules([...modules, getRandomModules()]);
  };
  const moduleList = modules.map((module, i) => {
    return <Module key={i} moduleName={module} />;
  });

  return (
    <div className="App">
      <button className="moduladd" onClick={handlerClick}>
        Modül ekle
      </button>
      <div className="moduleList">{moduleList}</div>
    </div>
  );
}

export default App;
