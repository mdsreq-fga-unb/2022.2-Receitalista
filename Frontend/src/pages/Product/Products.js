
import { Link } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import ProductCard from '../../components/Card/ProductCard'
import classes from './Products.module.css'
import classes1 from '../Page.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'
import { useState } from "react";
import axios from "../../api/axios";

function Products() {
	const [productList, setProductList] = useState([]);

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

	const getProductList = async () => {
		await axios.get("/product/list", {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }  }).then(response => {
			setProductList(response.data.products);
		}).catch(err => {
			console.log(err);
			alert("Não foi possível carregar a lista de produtos");
		});
	}

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
					{getProductList() && productList.length > 0 &&
						productList.map((product) =>
							<ProductCard
								id={product.id}
								name={product.name}
								price={product.total_price}
							/>
						)
					}
				</ul>
			</div >
		</>
	)
}

export default Products