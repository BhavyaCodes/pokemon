import React from "react";

import Header from "./Header";
import CardList from "./CardList";
import Footer from './Footer'
import Appcss from '../assets/css/App.css';
// import Bgimage from '../assets/background-image.jpg'

function App() {
  return (
    <div className="App" style={Appcss}>
      <Header />
      <div className="container">
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
