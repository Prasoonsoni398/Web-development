import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <div id="app" className="bg-success">My first React App</div>
      <Footer/>
    </>
  );
}

export default App;