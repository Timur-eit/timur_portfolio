import '../style.scss'
import { Link } from 'react-router-dom'

function ProjectDescription(props) {
  const {
    title,
    projectUrl,
    srcCodeUrl,
    img,
    desciption,
  } = props

  return (
    <div className='project-description'>
      <div>
        <h1>{title}</h1>
        <img src={img} alt='img'/>
        {desciption}
        <a href={projectUrl} target='_blank' rel="noopener noreferrer" className='project-link'>Project Link</a>
        <a href={srcCodeUrl} target='_blank' rel="noopener noreferrer" className='project-link'>Source Code Link</a>
      </div>
      <Link to='/' className='home-link'>Home</Link>
    </div>
  )
}

export default ProjectDescription