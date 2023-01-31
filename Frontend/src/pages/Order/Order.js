import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import classes from './Order.module.css'
import classes1 from '../../components/Button/CardButton.module.css'

import Container from '../../components/Container/Container'
import Message from '../../components/Message/Message'

import axios from '../../api/axios'
import UpdateOrder from '../../components/Form/UpdateOrder'

function getArraySize(array) {
	let counter = 0;
	for (const item in array) {
		counter = counter + 1;
	}
	return counter;
}

function Order() {
	let { id } = useParams()

	const [order, setOrder] = useState({});
	const [showOrderForm, setShowOrderForm] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const navigate = useNavigate();
	const [itemList, setItemList] = useState([]);
	const [message, setMessage] = useState('')
	const [type, setType] = useState('success')

	useEffect(() => {
		axios.get(`/order/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then((response) => {
			setOrder(response.data.order);
		}).catch(err => {
			console.log(err);
		})
	}, []);

	function toggleOrderForm() {
		setShowOrderForm(!showOrderForm);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!id) {
			console.log("Não está passando o id como parâmetro");
		} else if (!order.name) {
			setMessage('O nome do pedido não pode estar vazio')
			setType('error')
		} else if (getArraySize(itemList) < 1) {
			setMessage('Adicione ao menos um produto ao pedido')
			setType('error')
		} else {
			console.log(itemList);
			await axios.put(`/order/${id}`, { name: order.name, description: order.description, itens: itemList }, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
				console.log(response);
				setMessage('Pedido atualizado com sucesso')
				setType('success')
				setShowOrderForm(!showOrderForm)
			}).catch(err => {
				console.log(err);
				alert("Não foi possível atualizar o pedido!");
			});
		}
	}

	return (
		<>
			{order || order.name ? (
				<div className={classes.order_details}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={classes.details_container}>
							<h1>Pedido: {order.name}</h1>
							<div className={classes1.btn}>
								<button onClick={toggleOrderForm}>
									{!showOrderForm ? 'Editar pedido' : 'Fechar'}
								</button>
							</div>
							{!showOrderForm ? (
								<div className={classes.form}>
									<p>
										<span>Preço de venda:</span> R$ 0,00
									</p>
									<p>
										<span>Lucro:</span> R$ 0,00
										<span>Margem de lucro:</span> 0,00%
									</p>
									<p>
										<span>Valor dos produtos:</span> R$ {order.total_price},00
									</p>
									<p>
										<span>Custo de produção:</span> R$ 0,00
									</p>
									<p>
										<span>Descrição:</span> {order.description}
									</p>
								</div>
							) : (
								<div className={classes.form}>
									<UpdateOrder
										order={order}
										setOrder={setOrder}
										totalPrice={totalPrice}
										setTotalPrice={setTotalPrice}
										itemList={itemList}
										setItemList={setItemList}
										handleSubmit={handleSubmit}
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

export default Order