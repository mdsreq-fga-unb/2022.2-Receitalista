import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function MaterialForm({ handleSubmit, materialData }) {
  const [material, setMaterial] = useState(materialData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(material)
  }

  function handleChange(e) {
    setMaterial({ ...material, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={submit} className={classes.form}>

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
        text="Preço do material"
        name="price"
        placeholder="Insira o preço do material"
        handleOnChange={handleChange}
        value={material.price ? material.price : ''}    
      />

      <Input
        type="number"
        text="Quantidade do material"
        name="amount"
        placeholder="Insira a quantidade do material"
        handleOnChange={handleChange}
        value={material.amount ? material.amount : ''}    
      />
      <div>
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Quilos
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Litros
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Metros
        <input type="radio" name="unity" handleOnChange={handleChange} value={material.unity ? material.unity : ''} /> Centimetros      
      </div>      

      <SubmitButton text="Criar" />
    </form>

  )
}

export default MaterialForm