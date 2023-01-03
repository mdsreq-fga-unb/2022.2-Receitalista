import { useContext, useState } from 'react'

import axios from '../../api/axios';

import AuthContext from '../../context/AuthProvider';

import LoginForm from '../../components/Form/LoginForm'

import classes from "../Page.module.css"
import { useNavigate } from 'react-router';

const Login = () => {
	const [loginData, setLoginData] = useState({})
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/user/login', 
				JSON.stringify({ email: loginData.email, password: loginData.password }),
				{
					headers: {'Content-Type': 'application/json'},				
				});

				const acessToken = response?.data?.token;
				localStorage.setItem('acess_token', acessToken);
				
				navigate("/home");
				setAuth(localStorage.getItem('acess_token', acessToken));

		} catch (err) {
			console.log(err);
		}
		
	}

	return (
		<div className={classes.page}>
			<h1>Entrar na sua conta</h1>
			<p>Insira seus dados</p>
			<LoginForm handleSubmit={onSubmit} loginData={loginData} setLoginData={setLoginData} />
		</div>
	)
}

export default Login