import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();
  //neden kullanırız render ederken tüm işlemlerin bitmesi gerekir ama uzun işlem olunca gecikme olur bizde öncelik sırasını useTransitionla ayarlayacağız
  const handleChange = (e) => {
    setInput(e.target.value);
    //ilk inputSet ediliyor ve renderlanıyor sonra alttaki çalışıp render ediliyor
    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {/* isPEnding transition damı onu döndürür yani isPEndingse aşağıda yükleniyor yazsını gösteriyoruz */}
      {isPending
        ? "Yükleniyor"
        : myList.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
    </>
  );
}

export default App;
