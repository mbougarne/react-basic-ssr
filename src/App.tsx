import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';


export function App() {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}