import { Link } from 'react-router-dom'

import classes from './ProductCard.module.css'
import classes1 from '../../components/Button/CardButton.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'

function ProductCard({ id, name, productPrice, handleDeleteProduct }) {
	const [exists, setExists] = useState(true);

	if(exists){
		return (
			<div className={classes.card}>
				<h4>{name}</h4>
				<p><span>
					Preço:
				</span> R${productPrice}</p>
				<div className={classes1.btn}>
					<Link to={`/produto/${id}`}>
						<BsPencil /> Editar
					</Link>
					<button type='submit' onClick={() => {handleDeleteProduct(id, name); setExists(false)}}>
						<BsFillTrashFill /> Excluir
					</button>
				</div>
			</div>
		)
	}

	return <></>
}

export default ProductCard