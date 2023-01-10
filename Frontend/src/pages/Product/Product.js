import { useParams } from 'react-router-dom'
import { useState } from 'react'

import classes from './Product.module.css'

import Container from '../../components/Container/Container'
import ProductForm from '../../components/Form/ProductForm'

function Product(totalPrice) {
	let { id } = useParams()
	
	const [showProductForm, setShowProductForm] = useState(false)

	function toggleProductForm() {
		setShowProductForm(!showProductForm)
	}

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
										<span>Total</span> R${totalPrice}
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