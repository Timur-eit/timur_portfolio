import mainPicture from 'shared/img/main_picture.jpg'
import './style.scss'

function Intro() {
  return (
    <>
      <div className='intro-question' id='intro'>
        <h1>Are you looking for a Frontend Developer?</h1>
      </div>
      <div className='intro'>
        <div className='intro__content'>
          <h1>Evgeny Tsygankov</h1>
          <h2>Frontend Developer</h2>
          <img src={mainPicture} className='main-picture' alt='me'/>
          <p>
            Hello, I focused on logistics for 10 years, then I met programming and fell in love to this activity, to the point, that I became a programmer. I write on JS, tried some Python, Haskell, Kotlin, C++. I sincerely love programming and I want  to progress in this area.
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro;
