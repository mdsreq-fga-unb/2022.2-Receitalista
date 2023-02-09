import { useState } from 'react'
import axios from '../../api/axios';

import ClientForm from '../../components/Form/ClientForm'

import classes from "../Page.module.css"
import { useNavigate } from 'react-router-dom';

function NewClient() {
	const [client, setClient] = useState({});
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios.post('/client/add',
			{
				name: client.name,
				phone: client.phone
			},
			{
				headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem('acess_token')}` },
			})
			.then(function (response) {
				console.log(response);
				alert("Cliente cadastrado!");
				navigate("/clientes", { state: { message: `Cliente ${client.name} cadastrado com sucesso` } });
			})
			.catch(function (error) {
				if (error.response.status === 409) {
					alert("Cliente já existente!");
					setClient({});
				}
			});
	}

	return (
		<div className={classes.page}>
			<h1>Cadastrar novo cliente</h1>
			<ClientForm handleSubmit={onSubmit} client={client} setClient={setClient} />
		</div>
	)
}

export default NewClient