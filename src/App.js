import React from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="nodes">
      <Note></Note>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default App;