import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function AccountForm({ handleSubmit, accountData }) {
	const [account, setAccount] = useState(accountData || {})

	const submit = (e) => {
		e.preventDefault()
		handleSubmit(account)
	}

	function handleChange(e) {
		setAccount({ ...account, [e.target.name]: e.target.value })
	}

	return (

		<form onSubmit={submit} className={classes.form}>

			<Input
				type="text"
				text="Nome"
				name="name"
				placeholder="Insira o seu nome"
				handleOnChange={handleChange}
				value={account.name ? account.name : ''}
			/>

			<SubmitButton text="Criar" />
		</form>
	)
}

export default AccountForm