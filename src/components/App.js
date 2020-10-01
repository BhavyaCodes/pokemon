import React from "react";

import Header from "./Header";
import CardList from "./CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CardList />
      </div>
    </div>
  );
}

export default App;
