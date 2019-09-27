import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import "./App.css"
import "./styles/Form.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route component={Navigation} />
            <div className="App-content">
              <Switch>
                <Route exact path="/" component={SignupForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/profile" component={Profile}/>
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
