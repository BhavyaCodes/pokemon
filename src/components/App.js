import React from "react";

import { Switch,Route} from 'react-router-dom';
import Header from "./Header";
import Homepage from '../pages/homepage/homepage.jsx';

const App=()=>{
  return (
    <div className="App">
      <Header />
      <Switch>
       <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
