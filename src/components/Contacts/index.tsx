import './style.scss';
import { IMyContactList } from 'data/contactsData';

interface IContactsProps {
    contactList: IMyContactList;
}

function Contacts(props: IContactsProps) {
    const { contactList } = props;

    const scrollToStart = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="contacts-container">
            <h2>where you can find me</h2>
            <div>
                {Object.keys(contactList).map((contact) => {
                    return (
                        <a
                            key={contact}
                            href={contactList[contact].linkPath}
                            className="contacts-item"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>{contactList[contact].text}</p>
                            <img
                                src={contactList[contact].imgSrc}
                                alt={contactList[contact].altText}
                            />
                        </a>
                    );
                })}
            </div>
            <button className="back-home" onClick={scrollToStart}>
                back to top
            </button>
        </div>
    );
}

export default Contacts;
