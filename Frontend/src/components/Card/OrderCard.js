import { Link, useNavigate } from 'react-router-dom'

import classes from './OrderCard.module.css'
import classes1 from '../../components/Button/CardButton.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'

function OrderCard({ id, name, price, handleDeleteOrder }) {
	const [exists, setExists] = useState(true);
	const navigate = useNavigate();

	if(exists){
		return (
			<div className={classes.card}>
				<h4>#{id}</h4>
				<p>
					<span>Preço:</span> R${price}
				</p>
				<div className={classes1.btn}>
					{/* <Link to={`/pedido/${id}`}>
						<BsPencil /> Editar
					</Link> */}
					<button type='submit' onClick={() => {handleDeleteOrder(id, name); setExists(false)}}>
						<BsFillTrashFill /> Excluir
					</button>
				</div>
			</div>
		)
	}

	return <></>
}

export default OrderCard