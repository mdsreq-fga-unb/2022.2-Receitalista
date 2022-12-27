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

			<Input
				type="email"
				text="Email"
				name="email"
				placeholder="Insira o seu email"
				handleOnChange={handleChange}
				value={account.email ? account.email : ''}
			/>

			<Input
				type="password"
				text="Senha"
				name="password"
				placeholder="Insira sua senha"
				handleOnChange={handleChange}
				value={account.password ? account.password : ''}
			/>

			<Input
				type="password"
				text="Confirmar senha"
				name="confirmPassword"
				placeholder="Insira sua senha novamente"
				handleOnChange={handleChange}
				value={account.confirmPassword ? account.confirmPassword : ''}
			/>

			<SubmitButton text="Criar" />
		</form>
	)
}

export default AccountForm