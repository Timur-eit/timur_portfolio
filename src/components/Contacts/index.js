import './style.scss'
// import {myWorksList} from './worksList.js'
import { useMemo } from 'react'

function Contacts() {
  // const dataList = useMemo(() => myWorksList, [])
  return (
      <div className='contacts-container'>
       <h1>where you can find me</h1>
       <div>
       
        <div>
         <p>You can write me an email</p>
         <div>@</div>        
        </div>
        
        <div>
         <p>Or you can write me in Telegram</p>
         <div>T</div>        
        </div>
        
        <div>
         <p>You can also visit my GitHub account</p>
         <div>GitHub</div>
        </div>
        
        <div>
          <p>And my HeadHunter account</p>
          <div>HH</div>
        </div>

        <div>
         <p>If you'd like to know a bit more about me you can visit my VK page</p>
         <div>VK</div>
        </div>

       </div>

      <div>back to top</div>

      </div>
  )
}

export default Contacts