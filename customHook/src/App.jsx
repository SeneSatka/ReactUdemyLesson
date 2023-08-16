import { useState } from "react";

import "./App.css";
import TitleOne from "./TitleOne";
import Sayac from "./Sayac";
import PersonalInfo from "./PersonalInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <TitleOne /> */}
      {/* <Sayac /> */}
      <PersonalInfo />
    </div>
  );
}

export default App;
