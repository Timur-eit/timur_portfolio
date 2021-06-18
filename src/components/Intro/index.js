import mainPicture from 'shared/img/main_picture.jpg'
import './style.scss'

function Intro() {
  return (
    <>
    <div className='intro-question'>
      <h1>Are you looking for junior Frontend Developer?</h1>
    </div>
    {/* <h1 className='temp' style={{'color': 'white', 'margin': '0 0.2em'}}>
      At the moment the site is under construction by
      <a href='https://timur-eit.github.io/'>Timur-eit</a>
    </h1>   */}

    <div className='intro'>
      <div className='intro__content'>
        <h1>Evgeny Tsygankov</h1>
        <h2>junior frontend developer</h2>
        <img src={mainPicture} className='main-picture' alt='me'/>
        <p>
          Hello, I focused on logistics for 10 years, then I met programming and fell in love to this activity, to the point,  that   I became Junior Programmer. I write on JS, tried some Python, Haskell, Kotlin, C++. I sincerely love programming and I want  toprogress in  this area.
        </p>
      </div>
    </div>
    </>
  )
}

export default Intro;
