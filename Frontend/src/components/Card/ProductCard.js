import { Link } from 'react-router-dom'

import classes from './ProductCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProductCard({ id, name, price }) {

	return (
		<div className={classes.card}>
			<h4>{name}</h4>
			<p>
				<span>Preço:</span> R${price}
			</p>
			<div className={classes.card_actions}>
				<Link to="/">
					<BsPencil /> Editar
				</Link>
				<button onClick="">
					<BsFillTrashFill /> Excluir
				</button>
			</div>
		</div>
	)
}

export default ProductCard