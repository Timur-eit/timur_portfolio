import Intro from 'components/Intro';
import Skills from 'components/Skills';
import WorksList from 'components/WorksList';
import Contacts from 'components/Contacts';
import { myContactList } from 'data/contactsData';
import skillsList from 'data/skillsList';
import worksList from 'data/worksList';

function App() {
    return (
        <div className="App">
            <Intro />
            <Skills skillsList={skillsList} />
            <WorksList worklist={worksList} />
            <Contacts contactList={myContactList} />
        </div>
    );
}

export default App;
