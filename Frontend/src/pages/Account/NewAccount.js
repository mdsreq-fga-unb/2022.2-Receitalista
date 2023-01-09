import { useState } from 'react'
import axios from 'axios';

import AccountForm from '../../components/Form/AccountForm'

import classes from "../Page.module.css"
import { useNavigate } from 'react-router-dom';

function NewAccount() {
	const [account, setAccount] = useState({});
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		
		axios.post('http://localhost:3000/user/signup', {
			name: account.name,
			email: account.email,
			password: account.password,
			price_per_hour: account.pricePerHour
		  })
		  .then(function (response) {
			console.log(response);
			alert("Conta de usuário criada!");
			navigate("/");
		  })
		  .catch(function (error) {
			if(error.response.status === 409){
				alert("Conta de usuário já existente!");
				setAccount({});
			}
		  });
	}


	return (
		<div className={classes.page}>
			<h1>Criar conta</h1>
			<p>Crie a sua conta</p>
			<AccountForm handleSubmit={onSubmit} account={account} setAccount={setAccount} />
		</div>
	)
}

export default NewAccount