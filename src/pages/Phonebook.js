import { useState } from 'react';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

const Phonebook = () => {
    const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
	});
    const [contacts, setContacts] = useState([]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
        setContacts([...contacts, user])
	}

    return(
        <div>
            <h2>Phonebook</h2>
            <Form user={user} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <Contacts contacts={contacts} />
        </div>
    )
}

export default Phonebook;