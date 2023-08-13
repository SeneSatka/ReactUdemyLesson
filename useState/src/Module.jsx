import Discordjs from "./images/discordjs.png";
import Expressjs from "./images/expressjs.png";
import Reactjs from "./images/reactjs.png";
import Vuejs from "./images/vuejs.png";
import "./Module.css";
const moduleMap = {
  Discordjs,
  Expressjs,
  Reactjs,
  Vuejs,
};
function Module({ moduleName }) {
  console.log(moduleMap[moduleName]);
  return (
    <>
      <div className="moduleDiv">
        <img className="module" src={moduleMap[moduleName]} alt={moduleName} />
      </div>
    </>
  );
}

export default Module;
