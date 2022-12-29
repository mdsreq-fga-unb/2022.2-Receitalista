import { useState, useEffect } from "react"

import ProductCard from '../../components/Card/ProductCard'
import classes1 from '../Page.module.css'
import classes from './Products.module.css'

function Products() {

	const products = [
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
			<div className={classes1.page}>
				<h1>Produtos criados</h1>
				<p>Veja seus produtos</p>
			</div>
			<div className={classes.products}>
				<ul>
					{products.length > 0 &&
						products.map((product) =>
							<ProductCard
								id={product.id}
								name={product.name}
								price={product.price}
							/>
						)
					}
				</ul>
			</div >
		</>
	)
}

export default Products