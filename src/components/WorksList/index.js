import './style.scss'
import {myWorksList} from './worksList.js'

import {Link} from 'react-router-dom'
import { useMemo } from 'react'

function WorkList() {  
  const dataList = useMemo(() => myWorksList, [])  
  return (
      <div className='workslist-container'>
        <h2>List of my works</h2>
        <div className='list'>
          {Object.keys(dataList).map((item) => {  
            return (
              <div key={dataList[item].title} className='list__item'>
                <div className='list__item__description'>
                  <img src={dataList[item].imgSrc} alt={dataList[item].altText()}/>                
                  <h3>{dataList[item].title}</h3>
                  <p>Description</p>                  
                </div>
                <Link to={dataList[item].path}>View</Link>
              </div>
            )  
          })}
        </div>      
      </div>
  )
}

export default WorkList