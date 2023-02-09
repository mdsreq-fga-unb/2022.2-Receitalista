import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Link, useLocation } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';

import OrderCard from '../../components/Card/OrderCard'
import classes2 from '../../components/Button/LinkButton.module.css'

import classes from './Orders.module.css'
import classes1 from '../Page.module.css'
import Message from "../../components/Message/Message";

function Orders() {
	const [orderList, setOrderList] = useState([]);

	const [orderMessage, setOrderMessage] = useState('')

	const location = useLocation()
	let message = ''

	if (location.state) {
		message = location.state.message
	}

	useEffect(() => {
		axios.get("/order/list", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
			setOrderList(response.data.orders);
		}).catch(err => {
			console.log(err);
			if (orderList === 0) {
				alert("Não foi possível carregar a lista de produtos");
			}
		});
	}, []);

	const handleDeleteOrder = async (id, name) => {
		let order = orderList;
		await axios.delete(`order/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
		.then(response => {

			console.log(response);

			setOrderMessage(`Pedido excluído`)

			return 201;
		}).catch(err => {
			console.log(err);
			if (!id) {
				alert("Pedido já deletado!");
			}
		});
		setOrderList(order);
	}

	return (
		<>
			<div className={classes1.page}>
				<div className={classes.title}>
					<h1>Pedidos adicionados</h1>
					<div className={classes2.btn}>
						<Link to="/criarpedido" >
							<AiIcons.AiFillPlusCircle />Criar novo pedido
						</Link>
					</div>
				</div>
				{message && <Message type="success" msg={message} />}
				{orderMessage && <Message type="success" msg={orderMessage} />}
			</div>
			<div className={classes.orders}>
				<ul>
					{orderList.length > 0 &&
						orderList.map((order) =>
							<React.Fragment key={order.id}>
								<OrderCard
									id={order.id}
									name={order.name}
									price={order.total_price}
									handleDeleteOrder={handleDeleteOrder}
									orderList={orderList}
								/>
							</React.Fragment>
						)
					}
				</ul>
			</div >
		</>
	)
}

export default Orders