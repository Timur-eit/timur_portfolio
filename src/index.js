import React from 'react';
import ReactDOM from 'react-dom';
import 'reset.css';
import 'index.scss';

import App from 'App';
import AgilePduDescription from 'components/WorksList/AgilePduStore';

import {
  BrowserRouter as Router, // глобальня обертка (можно в индекс джс)
  Switch,
  Route,
} from 'react-router-dom'

import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>        
        <Route path='/agile-pdu'>
          <AgilePduDescription />     
        </Route>
        <Route exact path='/'>
          <App />          
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
