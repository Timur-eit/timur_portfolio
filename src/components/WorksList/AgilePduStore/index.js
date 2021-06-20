import '../style.scss'
import { Link } from 'react-router-dom'

function AgilePduDescription() {
  return (
    <div className='project-description'>
      <h1>Agile-Pdu online store</h1>    
      <a href='../../my-works/agile-pdu/index.html' target='_blank' noreferrer>Link</a>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default AgilePduDescription