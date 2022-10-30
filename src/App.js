import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
// import datas from "./components/data";
import InBox from "./components/InBox";
function App() {
  const [datas, setDatas] = useState([
    { title: "Abhiroon", content: "ho jaiga" },
  ]);
  const deleteItem = (i) => {
    console.log(i);
    setDatas((preValue) => {
      return preValue.filter((item, index) => index !== i);
    });
  };
  const addItem = (d) => {
    setDatas((preValue) => {
      return [...preValue, [d]];
    });
  };
  return (
    <div className="App">
      <Header />
      <InBox add={addItem} />
      {datas.map((p, index) => (
        <Note
          delete={deleteItem}
          key={index}
          id={index}
          title={p.title}
          content={p.content}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
