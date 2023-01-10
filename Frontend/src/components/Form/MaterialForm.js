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
  label: "Mililitro"
},
{
  key: 3,
  label: "Metro"
},
{
  key: 4,
  label: "Centímetro"
},
{
  key: 5,
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
      />

      <Input
        type="number"
        min="1"
        text="Preço unitário do material"
        name="price"
        placeholder="Insira o preço que custou o material"
        handleOnChange={handleChange}
        value={material.price}
      />

      {/* <Input
        type="number"
        min="1"
        text="Quantidade"
        name="amount"
        placeholder="Insira a quantidade do material"
        handleOnChange={handleChange}
        value={material.amount}
      /> */}

      <div>
        <h4>Medida:</h4>
        {labelList.map((item) => (
          <React.Fragment key={item.key}>
            <input type="radio" name="unity" onChange={handleChange} value={item.label} />
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