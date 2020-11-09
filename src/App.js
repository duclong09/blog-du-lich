import React from 'react';
import Home from './component/Home';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import PageRenderer from './page-renderer';
function App() {
  return (
    <Router>
    <div className="App">
        <Home/>
        <Switch>
          <Route path="/:page" component={PageRenderer}/>
          <Route path="/" render={() => <Redirect to="/home"/>} />
          <Route component={()=> 404} />
         
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
