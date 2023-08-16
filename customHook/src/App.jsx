import { useState } from "react";

import "./App.css";
import TitleOne from "./TitleOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TitleOne />
    </div>
  );
}

export default App;
