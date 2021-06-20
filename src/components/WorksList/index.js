import './style.scss'
import {myWorksList} from './worksList.js'

import {Link} from 'react-router-dom'

function WorkList() {
  return (

      <div className='workslist-container'>
        <h2>List of my works</h2>
        <div className='list'>
          {/* <Link to='/agile-pdu' className='list__item'>
            <img src={agilePduImg} alt='Project name'/>
            <span>Agile-PDU online store</span>
          </Link> */}
          {Object.keys(myWorksList).map((item) => {
            console.log(myWorksList)
            return (
              <Link key={myWorksList[item].title} to={myWorksList[item].path} className='list__item'>
                <img src={myWorksList[item].imgSrc} alt={myWorksList[item].altText()}/>
                <span>{myWorksList[item].title}</span>
              </Link>
            )  
          })}
        </div>      
      </div>
  )
}

export default WorkList