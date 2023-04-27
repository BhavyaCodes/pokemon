import React, { useState } from "react";


import { Header, CardList, Footer } from "../components";
import Appcss from '../assets/css/App.css';

function App() {
  const [searchQuery, setQuery] = useState("");

  return (
    <div className="App" style={Appcss}>
      <Header searchQuery={searchQuery} setSearchQuery={setQuery} />
      <div className="container">
        <CardList searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
