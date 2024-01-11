import { useState } from 'react'

const Form = ({ addContact, contacts }) => {
	const [form, setForm] = useState({ fullname: '', phone_number: '' })
	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		if (form.fullname === '' || form.phone_number === '') {
			return false
		}
		addContact([...contacts, form])
		setForm({ fullname: '', phone_number: '' })
	}
	return (
		<form onSubmit={onSubmit}>
			<div>
				<input name="fullname" placeholder="Name Surname" value={form.fullname} onChange={onChangeInput}></input>
			</div>
			<div>
				<input name="phone_number" placeholder="Phone" value={form.phone_number} onChange={onChangeInput}></input>
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
	)
}

export default Form
