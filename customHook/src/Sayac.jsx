import { useState } from "react";
import useCounter from "./useCounter";

function Sayac() {
  const [num, arttır, azalt, sıfırla] = useCounter();
  return (
    <div>
      <h2>Sayı = {num}</h2>
      <button onClick={arttır}>Arttır</button>
      <button onClick={sıfırla}>Sıfırla</button>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
}

export default Sayac;
