import { useContext } from "react";
import authContext from "../context/auth-context";

function Auth() {
  const { login, status } = useContext(authContext);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? (
        <div>
          <p>Evet</p> <button onClick={login}>Çıkış yap</button>
        </div>
      ) : (
        <div>
          <p>Hayır</p>
          <button onClick={login}>Giriş yap</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
