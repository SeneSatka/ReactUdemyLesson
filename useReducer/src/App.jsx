import { useReducer, createContext } from "react";
import "./App.css";
import Calculate from "../Components/Calculate";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "arttır":
      return state + 1;
    case "azalt":
      return state - 1;
    case "sıfırla":
      return initialValue;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <NumberContext.Provider value={{ count, dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
export const NumberContext = createContext();
