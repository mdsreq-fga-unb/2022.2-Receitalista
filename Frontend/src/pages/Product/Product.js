import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import classes from './Product.module.css'

import Container from '../../components/Container/Container'

import axios from '../../api/axios'
import UpdateProduct from '../../components/Form/UpdateProduct'

function getArraySize(array) {
	let counter = 0;
	for(const item in array){
		counter = counter + 1;
	}
	return counter;
}

function stringLenght(string){
	let count =0;

	for(let i = 0; string[i]; i++){
		count = count + 1;		
	}

	return count;
}

function Product() {
	let { id } = useParams()
	let itemArray = [];
	
	const [product, setProduct] = useState({});
	const [showProductForm, setShowProductForm] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const navigate = useNavigate();
	const [itemList, setItemList] = useState([]);
	
	useEffect(() => {
		axios.get(`/product/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then((response) => {
			setProduct(response.data.product);
		}).catch(err => {
			console.log(err);
		})
	},[]);

	function toggleProductForm() {
		setShowProductForm(!showProductForm);
		// navigate("/alterarproduto");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if(!id){
			console.log("NÃO ESTÁ PASSANDO ID NO PARÂMETRO");
		}
		else if(!product.name){
			alert("O nome do produto precisa ser preenchido!");
		}
		else if (getArraySize(product.itens) < 1){
			alert("Você deve adicionar pelo menos um material ao produto!");
		}
		else {

			console.log(itemList);
			await axios.put(`/product/${id}`, { name: product.name, description:product.description, itens_id: itemList }, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
				console.log(response);
				window.location.reload();
			}).catch(err => {
				console.log(err);
				alert("Não foi possível atualizar o produto!");
			});
		}
	}

	return (
		<>
		<div>.</div>
		<div>.</div>
		<div>.</div>
			{product && product.name ? (
				<div className={classes.product_details}>
					<Container customClass="column">
						<div className={classes.details_container}>
							<h1>Produto: {product.name}</h1>
							<button className={classes.btn} onClick={toggleProductForm}>
								{!showProductForm ? 'Editar produto' : 'Fechar'}
							</button>
							{!showProductForm ? (
								<div className={classes.form}>
									<p>
										<span>Total</span> R${product.total_price}
									</p>
								</div>
							) : (
								<div className={classes.form}>
									<UpdateProduct
										product={product}
										setProduct={setProduct}
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
			):(<p>Sem nada</p>)}
		</>
	)
}

export default Product