import React, { useState } from "react";

import Header from "./Header";
import CardList from "./CardList";

function App() {
  const [searchQuery, setQuery] = useState("");

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setQuery} />
      <div className="container">
        <CardList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
