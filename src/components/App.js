import React, { useState } from "react";

import { Header, CardList, Footer } from "../components";

function App() {
  const [searchQuery, setQuery] = useState("");

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setQuery} />
      <div className="container">
        <CardList searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
