
import { Link, useLocation } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import MaterialCard from '../../components/Card/MaterialCard'
import Container from '../../components/Container/Container'
import Message from '../../components/Message/Message';
import classes1 from '../Page.module.css'
import classes from './Materials.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'
import axios from "../../api/axios";
import React, { useEffect, useState } from "react";

function Materials() {
	const [materialList, setMaterialList] = useState([]);
	const [materialMessage, setMaterialMessage] = useState('')

	const location = useLocation()
	let message = ''

	if (location.state) {
		message = location.state.message
	}

	useEffect(() => {
		axios.get("/item/list", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
			setMaterialList(response.data.item);
		}).catch(err => {
			console.log(err);
			if (materialList === 0) {
				alert("Não foi possível carregar a lista de produtos");
			}
		});
	}, []);

	const handleDeleteMaterial = async (id, name) => {
		await axios.delete(`item/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
			.then(response => {
				console.log(response);
				setMaterialMessage(`Material ${name} excluído`)
				return 201;
			})
			.catch(err => {
				console.log(err);
			});
		return 500;
	}

	return (
		<>
			<div className={classes1.page}>
				<div className={classes.title}>
					<h1>Materiais adicionados</h1>
					<div className={classes2.btn}>
						<Link to="/criarmaterial" >
							<AiIcons.AiFillPlusCircle />Criar novo material
						</Link>
					</div>
				</div>
				{message && <Message type="success" msg={message} />}
				{materialMessage && <Message type="success" msg={materialMessage} />}
			</div>
			<div className={classes.itens}>
				<Container customClass="start">
					{materialList.length > 0 &&
						materialList.map((item) =>
							<React.Fragment key={item.id}>
								<MaterialCard
									id={item.id}
									name={item.name}
									price={item.price}
									handleDeleteMaterial={handleDeleteMaterial}
								/>
							</React.Fragment>
						)
					}
				</Container>
			</div >
		</>
	)
}

export default Materials