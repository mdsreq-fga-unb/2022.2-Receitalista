import React, { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

const labelList = [{
  key: 0,
  label: "Quilo"
},
{
  key: 1,
  label: "Litro"
},
{
  key: 2,
  label: "Metro"
},
{
  key: 3,
  label: "Unidade"
}];

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
        value={material.name}
        required="required"
      />

      <Input
        type="number"
        min="0.01"
        max="1000000"
        step={".01"}
        text="Preço da unidade em reais"
        name="price"
        placeholder="Insira o preço da unidade do material"
        handleOnChange={handleChange}
        value={material.price}
        required="required"
      />
      
      <Input
        type="number"
        min="0.01"
        max="1000000"
        step={".01"}
        text="Quantidade da medida"
        name="quantity"
        placeholder="Insira a quantidade da medida"
        handleOnChange={handleChange}
        value={material.quantity}
        required="required"
      /> 

      <div>
        <h4>Medida:</h4>
        {labelList.map((item) => (
          <React.Fragment key={item.key}>
            <input 
              type="radio" 
              name="unity" 
              onChange={handleChange} 
              value={item.label} 
              required
            />
            <label>{item.label}</label>
          </React.Fragment>
        ))}
        <p></p>
      </div>

      <SubmitButton text="Criar" />
    </form>
  )
}

export default MaterialForm