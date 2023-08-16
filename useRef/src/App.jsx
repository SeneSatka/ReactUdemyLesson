import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef();
  const renderCount = useRef(0);
  useEffect(() => {
    // setRenderCount((prev) => prev + 1);//Sonsuz döngüye girer çünkü değer değiştiğinde ekrana farklı değer yazılır ve o yüzden tekrar bu tetiklerir
    renderCount.current = renderCount.current + 1;
  });
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>Benim ismim {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
