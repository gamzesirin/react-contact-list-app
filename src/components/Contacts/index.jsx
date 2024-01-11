import './Contact.css'

import Form from './Form'
import List from './List'
import { useEffect } from 'react'
import { useState } from 'react'

const Contacts = () => {
	const [contacts, setContacts] = useState([])
	useEffect(() => {
		console.log(contacts)
	}, [contacts])

	return (
		<div id="container">
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	)
}

export default Contacts
