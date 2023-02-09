import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function ClientForm({ handleSubmit, client, setClient }) {

	function handleChange(e) {
		setClient({ ...client, [e.target.name]: e.target.value })
	}

	return (

		<form onSubmit={handleSubmit} className={classes.form}>

			<Input
				type="text"
				text="Nome"
				name="name"
				placeholder="Insira o nome do cliente"
				handleOnChange={handleChange}
				value={client.name}
				required="required"
			/>

			<Input
				type="tel"
				text="Telefone"
        pattern="[0-9]{8,11}"
				name="phone"
				placeholder="Insira o numero de telefone do cliente"
				handleOnChange={handleChange}
				value={client.phone}
				required="required"
			/>

			<SubmitButton text="Criar" type="button" />
		</form>
	)
}

export default ClientForm