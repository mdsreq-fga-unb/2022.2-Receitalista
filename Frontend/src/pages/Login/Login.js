import { useContext, useState } from 'react'

import axios from '../../api/axios';

import AuthContext from '../../context/AuthProvider';

import LoginForm from '../../components/Form/LoginForm'

import classes from "../Page.module.css"
import { useNavigate } from 'react-router';

import "./Login.module.css";

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
			<div style={{"width":"100%", "height":"50px", "display": "flex", "flexDirection": "column", "justifyContent":"center"}}>
				<button onClick={() => navigate("/criarconta")} style={{"border":"none", "cursor":"pointer", "textDecoration":"underline", "color": "#8A2B06"}}>Criar conta</button>
			</div>
		</div>
	)
}

export default Login