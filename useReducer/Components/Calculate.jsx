import { useContext } from "react";
import { NumberContext } from "../src/App";

function Calculate() {
  const { count, dispatch } = useContext(NumberContext);
  return (
    <>
      <div>Sayı {count}</div>
      <button onClick={() => dispatch("arttır")}>Arttır</button>
      <button onClick={() => dispatch("sıfırla")}>Sıfırla</button>
      <button onClick={() => dispatch("azalt")}>Azalt</button>
    </>
  );
}

export default Calculate;
