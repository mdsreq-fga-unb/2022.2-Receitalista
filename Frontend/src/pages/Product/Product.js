import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import classes from './Product.module.css'
import classes1 from '../../components/Button/CardButton.module.css'

import Container from '../../components/Container/Container'
import Message from '../../components/Message/Message'

import axios from '../../api/axios'
import ProductForm from '../../components/Form/ProductForm'

function getArraySize(array) {
	let counter = 0;
	for (const item in array) {
		counter = counter + 1;
	}
	return counter;
}

function Product() {
	let { id } = useParams()

	const [product, setProduct] = useState({});
	const [showProductForm, setShowProductForm] = useState(false);
	const navigate = useNavigate();
	const [itemList, setItemList] = useState([]);
	const [message, setMessage] = useState('')
	const [type, setType] = useState('success')

	useEffect(() => {
		axios.get(`/product/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then((response) => {
			setProduct(response.data.product);
		}).catch(err => {
			console.log(err);
		})
	}, []);

	function toggleProductForm() {
		setShowProductForm(!showProductForm);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!id) {
			console.log("Não está passando o id como parâmetro");
		} else if (!product.name) {
			setMessage('O nome do produto não pode estar vazio')
			setType('error')
		} else if (getArraySize(itemList) < 1) {
			setMessage('Adicione ao menos um material ao produto')
			setType('error')
		} else {
			console.log(itemList);
			await axios.put(`/product/${id}`, {
				name: product.name,
				description: product.description,
				itens: itemList,
				profit_margin: Number(product.profitMargin),
				time_spent: Number(product.timeSpent)
			}, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
				console.log(response);
				setMessage('Produto atualizado com sucesso')
				setType('success')
				setShowProductForm(!showProductForm)
			}).catch(err => {
				console.log(err);
				alert("Não foi possível atualizar o produto!");
			});
		}
	}

	return (
		<>
			{product || product.name ? (
				<div className={classes.product_details}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={classes.details_container}>
							<h1>Produto: {product.name}</h1>
							<div className={classes1.btn}>
								<button onClick={toggleProductForm}>
									{!showProductForm ? 'Editar produto' : 'Fechar'}
								</button>
							</div>
							{!showProductForm ? (
								<div className={classes.form}>
									<p>
										<span>Preço de venda:</span> R$ {product.product_price}
									</p>
									<p>
										<span>Lucro:</span> R$ {product.profit}
										<span>Margem de lucro:</span> {product.profit_margin} %
									</p>
									<p>
										<span>Custo de produção:</span> R$ {product.base_price}
									</p>
									<p>
										<span>Descrição:</span> {product.description}
									</p>
								</div>
							) : (
								<div className={classes.form}>
									<ProductForm
										product={product}
										setProduct={setProduct}
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

export default Product