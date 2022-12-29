import { Link } from 'react-router-dom'

import classes from './ItemCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ItemCard({ id, name }) {

	return (
		<div className={classes.item_card}>
			<h4>{name}</h4>
			<div className={classes.item_card_actions}>
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

export default ItemCard