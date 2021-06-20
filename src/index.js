import reportWebVitals from 'reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import 'reset.css'
import 'index.scss'

import App from 'App'
import ProjectDescription from 'components/WorksList/ProjectDescription'

import {
  BrowserRouter as Router, // глобальня обертка (можно в индекс джс)
  Switch,
  Route,
} from 'react-router-dom'

import { createBrowserHistory } from 'history'

import { myWorksList } from 'components/WorksList/worksList'


let history = createBrowserHistory()
console.log(history.location.pathname)



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {Object.keys(myWorksList).map((item) => {
          return (
            <Route path={myWorksList[item].path} key={myWorksList[item].path}>
              <ProjectDescription
                title={myWorksList[item].title}
                projectUrl={'/'}
                srcCodeUrl={'/'}
                img={myWorksList[item].imgSrc}
                desciption={myWorksList[item].description}
              />
            </Route>
          )
        })}
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
