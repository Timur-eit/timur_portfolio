import React from 'react';

interface IProjectDescription {
    [projectName: string]: {
        general: string;
        main: React.ReactElement<string>;
    };
}

export const projectDescription: IProjectDescription = {
    agilePdu: {
        general: 'Online store of electrical goods',
        main: (
            <>
                <p>
                    Online store landing page. Mobile and desktop views. Most of
                    the data is processed on the front-end side. The cart is
                    stored in the local storage of the browser. The order form
                    is implemented using Express.js, a small web server
                    framework and Nodemailer, a module that allows application
                    to send form data to store employees.
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>Vanilla JS</li>
                    <li>Webpack</li>
                    <li>SASS</li>
                    <li>Express.js</li>
                    <li>Nodemailer</li>
                </ul>
            </>
        ),
    },
    portfolio: {
        general: 'My current portfolio website',
        main: (
            <>
                <p>
                    My current portfolio site. Created to help me find the
                    perfect job offer.
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>React JS (Create React App)</li>
                    <li>React Router</li>
                    <li>SASS</li>
                    <li>MATERIAL-UI</li>
                </ul>
            </>
        ),
    },
    webHelp: {
        general: 'Webhelp Menu',
        main: (
            <>
                <p>
                    This is a web help menu for navigating some technical
                    documentation. This is a test assignment given to me by one
                    of my fellow developers to train and improve my skills.
                    Navigation is possible using both the mouse and the
                    keyboard.
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>React JS (Create React App)</li>
                    <li>Redux</li>
                    <li>SASS</li>
                    <li>Mousetrap</li>
                    <li>Jest</li>
                </ul>
            </>
        ),
    },
    chat: {
        general: 'Web chat',
        main: (
            <>
                <p>Web chat implemented with sockets.io</p>
                <ul>
                    <p>List of technologies used:</p>
                    <p>Backend:</p>
                    <li>TypeScript (Node.js)</li>
                    <li>ExpressJS</li>
                    <li>Socket.IO</li>
                    <p>Frontend:</p>
                    <li>ReactJS</li>
                    <li>TypeScript</li>
                    <li>Material-UI</li>
                    <li>SASS</li>
                    <li>socket.io-client</li>
                </ul>
            </>
        ),
    },
    dataTable: {
        general: 'Data table',
        main: (
            <>
                <p>
                    A small web application for reading and formatting some
                    data. The default data is fetched from a JSON file, after
                    which you can add, format, and delete your own data stored
                    in browser cookies.
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>React JS</li>
                    <li>Redux</li>
                    <li>SASS</li>
                    <li>Jest</li>
                    <li>Puppeteer</li>
                </ul>
            </>
        ),
    },
    uiComponents: {
        general: 'Some sample UI components',
        main: (
            <>
                <p>Some sample UI components written with ReactJS</p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>React JS (Hooks)</li>
                    <li>CSS</li>
                </ul>
            </>
        ),
    },
    whackAMole: {
        general: 'Fun simple browser game whack-a-mole',
        main: (
            <>
                <p>Browser game whack-a-mole</p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>Vanilla JS</li>
                    <li>HTML + CSS</li>
                </ul>
            </>
        ),
    },
    pokemons: {
        general: 'Task for learning React hooks',
        main: (
            <>
                <p>The first steps of my learning React</p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>ReactJS</li>
                    <li>CSS</li>
                </ul>
            </>
        ),
    },
    gradient: {
        general: 'Task for learning React hooks',
        main: (
            <>
                <p>The first steps of my learning React</p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>ReactJS</li>
                    <li>CSS</li>
                </ul>
            </>
        ),
    },
    brainGames: {
        general: 'Simple arithmetic CLI games',
        main: (
            <>
                <p>
                    Education project. Mini-games for CLI. That what my start of
                    learning JS.
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>CLI (POSIX)</li>
                    <li>Node.js</li>
                </ul>
            </>
        ),
    },
    jsSamples: {
        general: 'Some samples of JS code',
        main: (
            <>
                <p>
                    {/* Education project. Mini-games for CLI. That what my start of learning JS. */}
                </p>
                <ul>
                    <p>List of technologies used:</p>
                    <li>JavaScript</li>
                </ul>
            </>
        ),
    },
};
