
import AccountForm from '../../components/Form/AccountForm'

import classes from "../Page.module.css"

function NewAccount() {
	return (
		<div className={classes.page}>
			<h1>Criar conta</h1>
			<p>Crie a sua conta</p>
			<AccountForm />
		</div>
	)
}

export default NewAccount