import React from 'react'
import classes1 from "../Page.module.css"
import MaterialForm from '../../components/Form/MaterialForm'

const NewMaterial = () => {
	return (
		<div className={classes1.page}>
			<h1>Inserir novo material</h1>	
			<MaterialForm/>	
		</div>
	)
}

export default NewMaterial