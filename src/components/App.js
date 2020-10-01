import React from "react";

import Header from "./Header";
import CardList from "./CardList";
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
