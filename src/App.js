import 'App.scss'
import Intro from 'components/Intro/Intro'
import Header from 'components/Header/Header'

// import {urlList} from 'components/Header/urlList'
// import HeaderLink from 'components/HeaderLink/HeaderLink'


function App() {
  return (
    <div className="App">
      {/* <div>
      {Object.keys(urlList).map((linkUrl) => {
        <HeaderLink
          url={urlList[linkUrl].url}
          imgPath={urlList[linkUrl].logo}
          altText={urlList[linkUrl].note}
        />
      })}
      </div> */}
      
      
      <Header />
      <Intro />
    </div>
  )
}

export default App;
