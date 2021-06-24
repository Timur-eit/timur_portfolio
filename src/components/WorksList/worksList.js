import agilePduImg from 'shared/img/works_agile-pdu.png'
import webHelpMenuImg from 'shared/img/works_webhelp.png'
import dataTableImg from 'shared/img/works_table.png'
import uiCompsImg from 'shared/img/works_ui-comps.png'
import whackAMoleImg from 'shared/img/whack-a-mole.png'
import pockemonsImg from 'shared/img/works_pokemons.png'
import gradientImg from 'shared/img/works_gradient.png'
import portfolioImg from 'shared/img/works_portfolio.png'
import brainGamesImg from 'shared/img/works_brain-games.png'
import jsSamplesImg from 'shared/img/works_js-samples.png'

import { projectDescription } from './projectDescriptionData.jsx'

export const myWorksList = {
  agilePdu: {
    title: 'Agile-PDU online store',
    path: '/agile-pdu-description',
    imgSrc: agilePduImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.agilePdu.general, 
    mainDescription: projectDescription.agilePdu.main,
    projectUrl: '/agile-pdu/index.html',
    isSrcLink: false,
    srcCodeUrl: '#',

  },
  portfolio: {
    title: 'My Portfolio Website',
    path: '/portfolio',
    imgSrc: portfolioImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.portfolio.general, 
    mainDescription: projectDescription.portfolio.main,
    projectUrl: '/',
    isSrcLink: true,
    srcCodeUrl: 'https://github.com/Timur-eit/timur_portfolio',
  },
  webHelp: {
    title: 'Web-Help Visual Guidelines',
    path: '/web-help-menu-description',
    imgSrc: webHelpMenuImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.webHelp.general, 
    mainDescription: projectDescription.webHelp.main,
    projectUrl: '/web-help-menu/index.html',
    isSrcLink: true,
    srcCodeUrl: 'https://github.com/Timur-eit/idea_web_help',
  },
  dataTable: {
    title: 'Web App with Data table',
    path: '/data-table-description',
    imgSrc: dataTableImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.dataTable.general, 
    mainDescription: projectDescription.dataTable.main,
    projectUrl: '/data-table/index.html',
    isSrcLink: true,
    srcCodeUrl: 'https://github.com/Timur-eit/Evgeny_react/tree/main/my-table',

  },
  uiComponents: {
    title: 'UI Components',
    path: '/ui-comps-description',
    imgSrc: uiCompsImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.uiComponents.general, 
    mainDescription: projectDescription.uiComponents.main,
    projectUrl: '/ui-comps/index.html',
    isSrcLink: true,
    srcCodeUrl: 'https://github.com/Timur-eit/Evgeny_react/tree/main/my-ui-comps',
  },
  whackAMole: {
    title: 'Whack-a-Mole Game',
    path: '/whack-a-mole-description',
    imgSrc: whackAMoleImg,
    altText() {
      return this.title + ' Image'
    },
    generalDescription: projectDescription.whackAMole.general, 
    mainDescription: projectDescription.whackAMole.main,
    projectUrl: '/whack-a-mole/index.html',
    isSrcLink: true,
    srcCodeUrl: 'https://github.com/Timur-eit/whack-a-mole',

  },
  pokemons: {
    title: 'Pokemons - Test task for React hooks',
    path: '/pokemons',
    imgSrc: pockemonsImg,
    altText() {
      return this.title + ' Image'
    },

  },
  gradient: {
    title: 'Gradient - Test task for React states',
    path: '/gradient',
    imgSrc: gradientImg,
    altText() {
      return this.title + ' Image'
    },

  },
  brainGames: {
    title: 'Brain Games - Simple arithmetic CLI game',
    path: '/brain-games',
    imgSrc: brainGamesImg,
    altText() {
      return this.title + ' Image'
    },

  },
  jsSamples: {
    title: 'Some samples of JS code',
    path: '/js-samples',
    imgSrc: jsSamplesImg,
    altText() {
      return this.title + ' Image'
    },

  },
}