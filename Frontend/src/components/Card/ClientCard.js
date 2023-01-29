import { Link } from 'react-router-dom'

import classes from './ClientCard.module.css'
import classes1 from '../../components/Button/CardButton.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'

function ClientCard({ id, name, phone, handleDeleteClient }) {
	const [exists, setExists] = useState(true);

	if(exists){
		return (
			<div className={classes.card}>
				<h4>{name}</h4>
				<p>
					<span>Telefone:</span> {phone}
				</p>
				<div className={classes1.btn}>
					<Link to={`/client/${id}`}>
						<BsPencil /> Editar
					</Link>
					<button type='submit' onClick={() => {handleDeleteClient(id, name); setExists(false)}}>
						<BsFillTrashFill /> Excluir
					</button>
				</div>
			</div>
		)
	}

	return <></>
}

export default ClientCard