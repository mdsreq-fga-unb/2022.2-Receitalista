
import LoginForm from '../../components/Form/LoginForm'

import classes from "../Page.module.css"

const Login = () => {
	return (
		<div className={classes.page}>
			<h1>Entrar na sua conta</h1>
			<p>Insira seus dados</p>
			<LoginForm />
		</div>
	)
}

export default Login