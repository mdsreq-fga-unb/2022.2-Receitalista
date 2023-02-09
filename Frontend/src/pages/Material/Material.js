import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import classes from './Material.module.css'
import classes1 from '../../components/Button/CardButton.module.css'

import Container from '../../components/Container/Container'
import Message from '../../components/Message/Message'

import axios from '../../api/axios'
import MaterialForm from '../../components/Form/MaterialForm'

function Material() {
	let { id } = useParams()

	const [material, setMaterial] = useState({});
	const [showMaterialForm, setShowMaterialForm] = useState(false);
	const navigate = useNavigate();
	const [message, setMessage] = useState('')
	const [type, setType] = useState('success')

	function toggleMaterialForm() {
		setShowMaterialForm(!showMaterialForm);
	}

	useEffect(() => {
		axios.get(`/item/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
			.then((response) => {
				setMaterial(response.data.item);
			}).catch(err => {
				console.log(err);
			})
	}, [id]);


	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!id) {
			console.log("Não está passando o id como parâmetro");
		} else if (!material.name) {
			setMessage('O nome do material não pode estar vazio')
			setType('error')
		} else {
			await axios.put(`/item/${id}`, { name: material.name, price: material.price, quantity: material.quantity, unit: material.unity}, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
				console.log(response);
				setMessage('Material atualizado com sucesso!')
				setType('success')
				setShowMaterialForm(!showMaterialForm)
			}).catch(err => {
				console.log(err);
				alert("Não foi possível atualizar o material!");
			});
		}
	}

	return (
		<>
			{material || material.name ? (
				<div className={classes.material_details}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={classes.details_container}>
							<h1>Material: {material.name}</h1>
							<div className={classes1.btn}>
								<button onClick={toggleMaterialForm}>
									{!showMaterialForm ? 'Editar material' : 'Fechar'}
								</button>
							</div>
							{!showMaterialForm ? (
								<div className={classes.form}>
									<p>
										<span>Preço do material</span> R$ {material.price}
									</p>
{/* 									<p>
										<span>Unidade</span> {material.unity}
									</p> */}
								</div>
							) : (
								<div className={classes.form}>
									<MaterialForm
										handleSubmit={handleSubmit}
										material={material}
										setMaterial={setMaterial}
									/>
								</div>
							)}
						</div>
					</Container>
				</div>
			) : (<p>Sem nada</p>)}
		</>
	)
}

export default Material