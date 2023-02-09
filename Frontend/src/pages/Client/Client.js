import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import classes from '../Material/Material.module.css'
import classes1 from '../../components/Button/CardButton.module.css'

import Container from '../../components/Container/Container'
import Message from '../../components/Message/Message'

import axios from '../../api/axios'
import ClientForm from '../../components/Form/ClientForm'

function Client() {
	let { id } = useParams()

	const [client, setClient] = useState({});
	const [showClientForm, setShowClientForm] = useState(false);
	const navigate = useNavigate();
	const [message, setMessage] = useState('')
	const [type, setType] = useState('success')

	function toggleClientForm() {
		setShowClientForm(!showClientForm);
	}

	useEffect(() => {
		axios.get(`/client/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
			.then((response) => {
				setClient(response.data.client);
			}).catch(err => {
				console.log(err);
			})
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!id) {
			console.log("Não está passando o id como parâmetro");
		} else if (!client.name) {
			setMessage('O nome do cliente não pode estar vazio')
			setType('error')
		} else {
			await axios.put(`/client/${id}`, { name: client.name, phone: client.phone }, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
				console.log(response);
				setMessage('Cliente atualizado com sucesso!')
				setType('success')
				setShowClientForm(!showClientForm)
			}).catch(err => {
				console.log(err);
				alert("Não foi possível atualizar o cliente!");
			});
		}
	}

	return (
		<>
			{client || client.name ? (
				<div className={classes.material_details}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={classes.details_container}>
							<h1>Cliente: {client.name}</h1>
							<div className={classes1.btn}>
								<button onClick={toggleClientForm}>
									{!showClientForm ? 'Editar cliente' : 'Fechar'}
								</button>
							</div>
							{!showClientForm ? (
								<div className={classes.form}>
									<p>
										<span>Telefone do cliente: </span> {client.phone}
									</p>
								</div>
							) : (
								<div className={classes.form}>
									<ClientForm
										handleSubmit={handleSubmit}
										client={client}
										setClient={setClient}
									/>
								</div>
							)}
						</div>
					</Container>
				</div>
			) : (<p>Sem nada</p>)}
		</>
	)
}

export default Client