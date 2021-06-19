import './style.scss'
import agilePduImg from 'shared/img/works_agile-pdu.png'

import {
  BrowserRouter as Router, // глобальня обертка (можно в индекс джс)  
  Link
} from 'react-router-dom'

function WorkList() {
  return (
    <Router>
      <div className='workslist-container'>
        <h2>List of my works</h2>
        <div className='list'>
          <Link path='/agile-pdu' className='list__item'>
            <img src={agilePduImg} alt='Project name'/>
            <span>Agile-PDU online store</span>
          </Link>  
        </div>
      </div>
    </Router>
  )
}

export default WorkList