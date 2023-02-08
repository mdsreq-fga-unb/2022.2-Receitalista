import React, { useState } from 'react'

import { useNavigate } from 'react-router';

import axios from "../../api/axios";

import MaterialForm from '../../components/Form/MaterialForm'

import classes from "../Page.module.css"


const NewMaterial = () => {
	const [material, setMaterial] = useState({});
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post('/item/add', JSON.stringify({
				name: material.name,
				price: material.price,
				quantity: material.quantity,
				unit: material.unity
			}),
				{
					headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem('acess_token')}` },
				}).then(() => {
					navigate('/materiais', { state: { message: `Material ${material.name} criado com sucesso` } });
				});
		} catch (err) {
			alert("Erro interno!");
			console.log(err);
		}
	}

	return (
		<div className={classes.page}>
			<h1>Inserir novo material</h1>
			<MaterialForm handleSubmit={onSubmit} material={material} setMaterial={setMaterial} />
		</div>
	)
}

export default NewMaterial