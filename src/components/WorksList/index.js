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
              <Link key={dataList[item].title} to={dataList[item].path} className='list__item'>
                <img src={dataList[item].imgSrc} alt={dataList[item].altText()}/>
                <span>{dataList[item].title}</span>
              </Link>
            )  
          })}
        </div>      
      </div>
  )
}

export default WorkList