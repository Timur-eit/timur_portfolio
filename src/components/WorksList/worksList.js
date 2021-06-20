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

export const myWorksList = {
  agilePdu: {
    title: 'Agile-PDU online store',
    path: '/agile-pdu',
    imgSrc: agilePduImg,
    altText() {
      return this.title + ' Image'
    },
  },
  portfolio: {
    title: 'My Portfolio Website',
    path: '/portfolio',
    imgSrc: portfolioImg,
    altText() {
      return this.title + ' Image'
    },

  },
  webHelp: {
    title: 'Web-Help Visual Guidelines',
    path: '/web-help-menu',
    imgSrc: webHelpMenuImg,
    altText() {
      return this.title + ' Image'
    },

  },
  dataTable: {
    title: 'Web App with Data table',
    path: '/data-table',
    imgSrc: dataTableImg,
    altText() {
      return this.title + ' Image'
    },

  },
  uiComponents: {
    title: 'UI Components',
    path: '/ui-comps',
    imgSrc: uiCompsImg,
    altText() {
      return this.title + ' Image'
    },

  },
  whackAMole: {
    title: 'Whack-a-Mole Game',
    path: '/whack-a-mole',
    imgSrc: whackAMoleImg,
    altText() {
      return this.title + ' Image'
    },

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