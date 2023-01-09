import { Link } from 'react-router-dom'

import classes from './MaterialCard.module.css'
import classes1 from '../../components/Button/CardButton.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { useState } from 'react'

function MaterialCard({ id, name, handleDeleteMaterial }) {
	const [exists, setExists] = useState(true);

	const handleClick = (sucessfull) => {
		if(sucessfull && sucessfull === 500){
			setExists(true);
		}
		else if(sucessfull) {
			setExists(false);
		}
	}

	console.log(exists);
	if(exists){
		return (
			<div className={classes.item_card}>
				<h4>{name}</h4>
				<div className={classes1.btn}>
					<Link to="/">
						<BsPencil /> Editar
					</Link>
					<button onClick={() => handleClick(handleDeleteMaterial(id, name))}>
						<BsFillTrashFill /> Excluir
					</button>
				</div>
			</div>
		)
	}

	return <></>;
}

export default MaterialCard