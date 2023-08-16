import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);
  const arttır = () => {
    setNum((prevnum) => prevnum + 1);
  };
  const azalt = () => {
    setNum((prevnum) => prevnum - 1);
  };
  const sıfırla = () => {
    setNum(0);
  };
  return [num, arttır, azalt, sıfırla];
}

export default useCounter;
