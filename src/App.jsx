import './App.css';

import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const dataUsers = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
	const [contacts, setContacts] = useState(dataUsers);
	const [filter, setFilter] = useState('');

	const handleSearchChange = e => {
		setFilter(e.target.value);
	};

	const handleCreateUser = newCard => {
		setContacts(prev => [...prev, newCard]);
	};

	const handleRemoveUser = id => {
		// Check id
		setContacts(prev => {
			return prev.filter(item => item.id !== id);
		});
	};

	const visibleItems = contacts.filter(item =>
		item.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className='container'>
			<h1>Phonebook</h1>
			<ContactForm handleAdd={handleCreateUser} />
			<SearchBox searchValue={filter} handleChange={handleSearchChange} />
			<ContactList contacts={visibleItems} handlerRemove={handleRemoveUser} />
		</div>
	);
}

export default App;
