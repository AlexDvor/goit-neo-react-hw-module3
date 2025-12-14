import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
	return (
		<ul className={s.list}>
			{contacts.map(contact => (
				<Contact item={contact} key={contact.id} />
			))}
		</ul>
	);
};

export default ContactList;
