import './style.scss'
import { myContactList } from './contactsData.js'
import { useMemo } from 'react'

function Contacts() {
  const dataList = useMemo(() => myContactList, [])
  return (
      <div className='contacts-container'>
       <h2>where you can find me</h2>       
       <div>
        {Object.keys(dataList).map((contact) => {
          return (
            <a href={dataList[contact].linkPath} className='contacts-item' target='_blank' rel='noopener noreferrer'>
              <p>{dataList[contact].text}</p>
              <img src={dataList[contact].imgSrc} alt={dataList[contact].altText} />
            </a>
          )
        })}
        </div>
        <a href='#intro' className='back-home'>back to top</a>
       </div>
  )
}

export default Contacts