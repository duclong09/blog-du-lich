import React from 'react';
import Home from './component/Home';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer';
function App() {
  return (
    <Router>
    <div className="App">
      
        <Home/>
      
      </div>
    </Router>
  
  );
}

export default App;
