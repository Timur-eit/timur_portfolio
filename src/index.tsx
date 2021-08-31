import React from 'react';
import ReactDOM from 'react-dom';
import 'reset.css';
import 'index.scss';

import App from 'App';
import ProjectDescription from 'components/WorksList/ProjectDescription';
import {
    BrowserRouter as Router, // глобальная обертка (можно в индекс джс)
    Switch,
    Route,
} from 'react-router-dom';

import myWorksList from 'data/worksList';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                {Object.keys(myWorksList).map((item) => {
                    return (
                        <Route
                            path={myWorksList[item].path}
                            key={myWorksList[item].path}
                        >
                            <ProjectDescription
                                title={myWorksList[item].title}
                                projectUrl={myWorksList[item].projectUrl}
                                img={myWorksList[item].imgSrc}
                                desciption={myWorksList[item].mainDescription}
                                isSrcLink={myWorksList[item].isSrcLink}
                                srcCodeUrl={myWorksList[item].srcCodeUrl}
                            />
                        </Route>
                    );
                })}
                <Route exact path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
