import {urlList} from './urlList'
import './style.scss'

import SimpleMenu from 'shared/ui/Menu'


function Header() {
  
  const links = Object.keys(urlList).map((linkUrl) => {
    return <a
      href={urlList[linkUrl].url}
      target='_blank'
      rel="noreferrer">
      <img src={urlList[linkUrl].logo} alt={urlList[linkUrl].note}/>
    </a>  
  })
  
  
  return (
    <div className='header'>
      <SimpleMenu menuItems={links}/>
    </div>
  )
}

export default Header;