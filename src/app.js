/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';

// Our app
import App from './app/App';
import About from './app/about';
import Home from './app/home';
import Posts from './app/posts/Posts';
import Post from './app/posts/Post';

render((
  <Provider store={store}>
  <Router>
    <Switch>
    <Route path='/' exact component={App}/>
      <Route path='/about' exact component={About}/>
      <Route path='/home' exact component={Home}/>
      <Route path='/feed' exact component={Posts}/>
      <Route path='/posts/:id' exact component={Post}/>
    </Switch>
  </Router>
  </Provider>
), document.getElementById('root'));
