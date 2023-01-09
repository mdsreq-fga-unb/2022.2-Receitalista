import { useContext, useState } from 'react'

import axios from '../../api/axios';

import AuthContext from '../../context/AuthProvider';

import LoginForm from '../../components/Form/LoginForm'

import classes from "../Page.module.css"
import { useNavigate } from 'react-router';

import "./Login.module.css";

function stringLenght(string){
	let count =0;

	for(let i = 0; string[i]; i++){
		count = count + 1;		
	}

	return count;
}

const Login = () => {
	const [loginData, setLoginData] = useState({})
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		if(!loginData.email) {
			alert("O campo Email precisa estar preenchido!");
		}
		else if(!loginData.password) {
			alert("O campo Email precisa estar preenchido!");
		}
		else if(stringLenght(loginData.password) < 8){
			alert("A senha precisa ter no mínimo 8 caracteres!");
		}
		else {
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
				alert("Não foi possível realizar o login");
				console.log(err);
			}
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