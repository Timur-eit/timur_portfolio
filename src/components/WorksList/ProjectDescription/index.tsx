import '../style.scss'
import { createBrowserHistory } from 'history'
import React from 'react'

interface IProjectDescriptionProps {
  title: string
  projectUrl: string,
  srcCodeUrl: string,
  img: string,
  desciption: React.ReactElement<string>,
  isSrcLink: boolean,
}


function ProjectDescription(props: IProjectDescriptionProps) {
  const {
    title,
    projectUrl,
    srcCodeUrl,
    img,
    desciption,
    isSrcLink,
  } = props

  const history = React.useMemo(() => createBrowserHistory(), [])

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