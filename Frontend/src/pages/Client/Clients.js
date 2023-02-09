import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import axios from "../../api/axios";
import ClientCard from '../../components/Card/ClientCard'
import classes1 from '../Page.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'
import classes from './Clients.module.css'
import Message from "../../components/Message/Message";

function Clients() {
	const [clientList, setClientList] = useState([]);
	const [clientMessage, setClientMessage] = useState('')
	
	const location = useLocation()
	let message = ''

	if (location.state) {
		message = location.state.message
	}

	useEffect(() => {
		axios.get("/client/list", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
			setClientList(response.data.client);
		}).catch(err => {
			console.log(err);
			if (clientList === 0) {
				alert("Não foi possível carregar a lista de clientes");
			}
		});
	}, []);

	const handleDeleteClient = async (id, name) => {
		let client = clientList;
		await axios.delete(`client/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
			.then(response => {
				console.log(response);
				setClientMessage(`Cliente ${name} excluído`)
				return 201;
			}).catch(err => {
				console.log(err);
				if (!id) {
					alert("Cliente já deletado!");
				}
			});
		setClientList(client);
	}

	return (
		<>
			<div className={classes1.page}>
				<div className={classes.title}>
					<h1>Clientes adicionados</h1>
					<div className={classes2.btn}>
						<Link to="/novocliente" >
							<AiIcons.AiFillPlusCircle />Criar novo cliente
						</Link>
					</div>
				</div>
				{message && <Message type="success" msg={message} />}
				{clientMessage && <Message type="success" msg={clientMessage} />}
			</div>
			<div className={classes.clients}>
				<ul>
					{clientList.length > 0 &&
						clientList.map((client) =>
							<React.Fragment key={client.id}>
								<ClientCard
									id={client.id}
									name={client.name}
									phone={client.phone}
									handleDeleteClient={handleDeleteClient}
								/>
							</React.Fragment>
						)
					}
				</ul>
			</div >
		</>
	)
}

export default Clients