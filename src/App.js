import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../src/components/pages/home';
import Clipart from '../src/components/pages/clipart'

function App() {
  return (
      <CssBaseline>
          <Router>
                <Switch>
                  <Route exact path='/home' component={Home}/>
                  <Route exact path='/clipart' component={Clipart}/>

                  <Route>
                    <h1>Error 404: The page you're looking for does not exist</h1>
                  </Route>
                </Switch>

          </Router>
      </CssBaseline>
  );
}

export default App;
