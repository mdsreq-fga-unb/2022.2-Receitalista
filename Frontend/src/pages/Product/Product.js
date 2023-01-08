import { parse, v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useState } from 'react'

import classes from './Product.module.css'

import Container from '../../components/Container/Container'
import ProductForm from '../../components/Form/ProductForm'
import axios from '../../api/axios'

function Product() {
	let { id } = useParams()
	
	const [productList, setProductList] = useState([]);
	const [showProductForm, setShowProductForm] = useState(false)

	function toggleProductForm() {
		setShowProductForm(!showProductForm)
	}

	axios.get("/product/list").then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
		alert("Não foi possível carregar a lista de produtos");
	})

	const product = [
		{
			id: '1',
			name: 'tomate',
			price: '1',
		},
		{
			id: '2',
			name: 'asas',
			price: '1',
		},
		{
			id: '3',
			name: 'tomate',
			price: '1',
		},
		{
			id: '4',
			name: 'asas',
			price: '1',
		},
		{
			id: '5',
			name: 'tomate',
			price: '1',
		},
		{
			id: '6',
			name: 'asas',
			price: '1',
		},
		{
			id: '1',
			name: 'tomate',
			price: '1',
		},
		{
			id: '2',
			name: 'asas',
			price: '1',
		},
		{
			id: '3',
			name: 'tomate',
			price: '1',
		},
		{
			id: '4',
			name: 'asas',
			price: '1',
		},
		{
			id: '5',
			name: 'tomate',
			price: '1',
		},
		{
			id: '6',
			name: 'asas',
			price: '1',
		},
	]

	return (
		<>
			{product.name ? (
				<div className={classes.product_details}>
					<Container customClass="column">
						<div className={classes.details_container}>
							<h1>Produto: {product.name}</h1>
							<button className={classes.btn} onClick={toggleProductForm}>
								{!showProductForm ? 'Editar projeto' : 'Fechar'}
							</button>
							{!showProductForm ? (
								<div className={classes.form}>
									<p>
										<span>Categoria:</span> {product.category.name}
									</p>
									<p>
										<span>Total do orçamento:</span> R${product.budget}
									</p>
									<p>
										<span>Total utilizado:</span> R${product.cost}
									</p>
								</div>
							) : (
								<div className={classes.form}>
									<ProductForm
										handleSubmit=""
										btnText="Concluir edição"
										productData={product}
									/>
								</div>
							)}
						</div>
					</Container>
				</div>
			):(<p>Sem nada</p>)}
		</>
	)
}

export default Product