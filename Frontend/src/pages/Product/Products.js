
import { Link } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import ProductCard from '../../components/Card/ProductCard'
import classes from './Products.module.css'
import classes1 from '../Page.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'

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
				<div className={classes.title}>
					<h1>Produtos adicionados</h1>
					<div className={classes2.btn}>
						<Link to="/criarproduto" >
							<AiIcons.AiFillPlusCircle />Criar novo produto
						</Link>
					</div>
				</div>
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