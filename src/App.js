import 'App.scss'
import Intro from 'components/Intro'
import Skills from 'components/Skills'
import WorksList from 'components/WorksList'
import BasicTextFields from 'shared/ui/Form'

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <WorksList />
    </div>
  )
}

export default App
