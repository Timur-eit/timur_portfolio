import {urlList} from './urlList'
import './style.scss'

function Header() {
  return (
    <div className='header'>
      {Object.keys(urlList).map((linkUrl) => {
        return <a
          href={urlList[linkUrl].url}
          target='_blank'
          rel="noreferrer">
          <img src={urlList[linkUrl].logo} alt={urlList[linkUrl].note}/>
        </a>  
      })}    
    </div>
  )
}

export default Header;