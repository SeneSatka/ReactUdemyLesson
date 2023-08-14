import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enes, setEnes] = useState(0);
  const [aktas, setAktas] = useState(0);
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);
  useEffect(() => {
    console.log("Her zaman çalışır");
  });
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır  Enes değerinde bir değişiklik olduğunda çalışır"
    );
  }, [enes]);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır  Aktas değerinde bir değişiklik olduğunda çalışır"
    );
  }, [aktas]);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır  Enes veya Aktas değerinde bir değişiklik olduğunda çalışır"
    );
  }, [enes, aktas]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button
          onClick={() => {
            setEnes(enes + 1);
          }}
        >
          Enes ++
        </button>
        <div>Enes: {enes} </div>
      </div>
      <div>
        <button
          onClick={() => {
            setAktas(aktas + 1);
          }}
        >
          Aktas ++
        </button>
        <div>Aktas: {aktas} </div>
      </div>
    </div>
  );
}

export default App;
