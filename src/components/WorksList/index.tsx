import './style.scss'
// import {myWorksList} from '../../data/worksList'
import {IMyWorksList} from 'data/worksList'
import { Link } from 'react-router-dom'
import React from 'react'

interface IWorkListProps {
  worklist: IMyWorksList
}

function WorkList(props: IWorkListProps) {
  const {worklist} = props;
  return (
      <div className='workslist-container'>
        <h2>List of my works</h2>
        <div className='list'>
          {Object.keys(worklist).map((item) => {
            return (
              <div key={worklist[item].title} className='list__item'>
                <div className='list__item__description'>
                  <img src={worklist[item].imgSrc} alt={worklist[item].altText()}/>
                  <h3>{worklist[item].title}</h3>
                  <p>{worklist[item].generalDescription}</p>
                </div>
                <Link to={worklist[item].path}>View</Link>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default WorkList