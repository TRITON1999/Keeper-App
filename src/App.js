import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import datas from "./components/data";
function App() {
  return (
    <div className="App">
      <Header />
      {datas.map((p)=><Note key={p.key} title={p.title} content={p.content}/>)}
      <Footer />
    </div>
  );
}
export default App;