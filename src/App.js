import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/About';
import Clipart from './components/Contact';

function App() {
  return (
      <CssBaseline>
          <Router>
                <Switch>
                  <Route exact path='*' component={Home}/>
                  <Route exact path='/clipart' component={Clipart}/>
                </Switch>
          </Router>
      </CssBaseline>
  );
}

export default App;
