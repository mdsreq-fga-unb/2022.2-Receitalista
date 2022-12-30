
import classes from "../Page.module.css"

import PasswordForm from '../../components/Form/PasswordForm';

const NewPassword = () => {
	return (
		<div className={classes.page}>
			<h1>Nova senha</h1>
			<p>Digite uma nova senha</p>
			<PasswordForm />
		</div>
	)
}

export default NewPassword