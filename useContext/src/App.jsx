import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import authContext from "./context/auth-context";
import Auth from "./Components/Auth";
function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const loginAuth = () => {
    setAuthStatus(!authStatus);
  };
  return (
    <authContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </authContext.Provider>
  );
}

export default App;
