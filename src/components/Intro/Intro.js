import mainPicture from 'shared/img/main_picture.jpg'
import './style.scss'

function Intro() {
  return (
    <>
    <div className='intro'>
      <img src={mainPicture} className='main-picture' alt='me'/>
      <div>
        <h1>Junior frontend Developer</h1>
        <p>
          Hello, my name is Evgeny. I focused on logistics for 10 years, then I met programming and fell in love to this activity, to the point, that   I became Junior Programmer. I write on JS, tried some Python, Haskell, Kotlin, C++. I sincerely love programming and I want to progress in  this area.
        </p>
      </div>    
    </div>
    <h1 className='temp' style={{'color': 'white', 'margin': '0 0.2em'}}>
      At the moment the site is under construction by
      <a href='https://timur-eit.github.io/'>Timur-eit</a>
    </h1>  
    </>
  )
}

export default Intro;
