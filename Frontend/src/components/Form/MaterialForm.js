import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function MaterialForm({ handleSubmit, material, setMaterial }) {
  
  function handleChange(e) {
    setMaterial({ ...material, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={handleSubmit} className={classes.form}>

      <Input
        type="text"
        text="Nome do material"
        name="name"
        placeholder="Insira o nome do material"
        handleOnChange={handleChange}
        value={material.name ? material.name : ''}
      />

      <Input
        type="number"
        min="1"
        text="Preço do material"
        name="price"
        placeholder="Insira o preço que custou o material"
        handleOnChange={handleChange}
        value={material.price ? material.price : ''}
      />

      <Input
        type="number"
        min="1"
        text="Quantidade"
        name="amount"
        placeholder="Insira a quantidade do material"
        handleOnChange={handleChange}
        value={material.amount ? material.amount : ''}
      />

      <div>
        <h4>Medida:</h4>
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Quilo
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Litro
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Mililitro
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Metro
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Centímetro
        <p></p>
      </div>

      <SubmitButton text="Criar" />
    </form>
  )
}

export default MaterialForm