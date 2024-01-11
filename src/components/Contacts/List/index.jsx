import { useState } from 'react'

const List = ({ contacts }) => {
	const [filter, setFilter] = useState('')
	const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filter.toLowerCase()))
	})

	return (
		<>
			<h1> Contact List App</h1>
			<input type="text" placeholder="Filter Contact" value={filter} onChange={(e) => setFilter(e.target.value)} />
			<ul>
				{filtered.map((contact, index) => (
					<li key={index}>
						{contact.fullname} - {contact.phone_number}
					</li>
				))}
			</ul>
			<h2>Contacts : ({filtered.length})</h2>
		</>
	)
}

export default List
