import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function AccountForm({ handleSubmit, account, setAccount }) {

	function handleChange(e) {
		setAccount({ ...account, [e.target.name]: e.target.value })
	}

	return (

		<form onSubmit={handleSubmit} className={classes.form}>

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
				min={0}
				type="number"
				text="Custo de mão de obra"
				name="pricePerHour"
				placeholder="Custo de mão de obra"
				handleOnChange={handleChange}
				value={account.pricePerHour ? account.pricePerHour : 0}
			/>

			<SubmitButton text="Criar" type="button" />
		</form>
	)
}

export default AccountForm