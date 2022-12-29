import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function ProductForm({ handleSubmit, productData }) {
  const [product, setProduct] = useState(productData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(product)
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={submit} className={classes.form}>

      <Input
        type="text"
        text="Nome do produto"
        name="name"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={product.name ? product.name : ''}
      />

      <Input
        type="text"
        text="Descrição do produto"
        name="description"
        placeholder="Ex.: Receita do produto"
        MAXLENGTH = "10"
        handleOnChange={handleChange}
        value={product.description ? product.description : ''}
      />

      <SubmitButton text="Criar" />
    </form>

  )
}

export default ProductForm