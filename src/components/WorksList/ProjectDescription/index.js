import '../style.scss'
import { createBrowserHistory } from 'history'
import { useMemo } from 'react'

// let history = createBrowserHistory()
// console.log(history.location.pathname)

function ProjectDescription(props) {
  const {
    title,
    projectUrl,
    srcCodeUrl,
    img,
    desciption,
    isSrcLink,
  } = props

  const history = useMemo(() => createBrowserHistory(), [])
  console.log(history)

  return (
    <div className='project-description'>
      <div>
        <h1>{title}</h1>
        <img src={img} alt='img'/>
        {desciption}
        <a href={projectUrl} target='_blank' rel="noopener noreferrer" className='project-link'>Project Link</a>
        {isSrcLink && <a href={srcCodeUrl} target='_blank' rel="noopener noreferrer" className='project-link'>Source Code Link</a>}
      </div>      
      <div className='home-link' onClick={() => history.back()}>Back</div>
    </div>
  )
}

export default ProjectDescription