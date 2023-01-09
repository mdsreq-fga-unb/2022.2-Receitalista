
import { Link } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import ProductCard from '../../components/Card/ProductCard'
import classes from './Products.module.css'
import classes1 from '../Page.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

function Products() {
	const [productList, setProductList] = useState([]);

	useEffect(() => { 
		axios.get("/product/list", {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }  }).then(response => {
			setProductList(response.data.products);
		}).catch(err => {
			console.log(err);
			if(productList === 0){
				alert("Não foi possível carregar a lista de produtos");
			}
		});
	 },[]);

	 const handleDeleteProduct = async (id, name) => {
		let product = productList;
		await axios.delete(`product/${id}`, {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }  }).then(response => {

			let deletedItemId = product.filter((element, index) => {
				if(element.id === id){
					return index;
				}
			});
			
			
			product.splice(deletedItemId, 1);
			
			console.log(response);
			alert(`Produto ${name} deletado com sucesso!`);
		}).catch(err => {
			console.log(err);
			if(!id){
				alert("Produto já deletado!");
			}
		});
		setProductList(product);
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
					{productList.length > 0 &&
						productList.map((product) =>
							<React.Fragment key={product.id}>
								<ProductCard
								id={product.id}
								name={product.name}
								price={product.total_price}
								handleDeleteProduct={handleDeleteProduct}
								productList={productList} />
							</React.Fragment>
						)
					}
				</ul>
			</div >
		</>
	)
}

export default Products