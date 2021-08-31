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

import { myWorksList } from 'components/WorksList/worksList'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {Object.keys(myWorksList).map((item: any) => {
          return (
            <Route path={myWorksList[item].path} key={myWorksList[item].path}>
              <ProjectDescription
                title={myWorksList[item].title}
                projectUrl={myWorksList[item].projectUrl}
                img={myWorksList[item].imgSrc}
                desciption={myWorksList[item].mainDescription}
                isSrcLink={myWorksList[item].isSrcLink}
                srcCodeUrl={myWorksList[item].srcCodeUrl}
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
