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
        type="number"
        text="Preço do produto"
        name="price"
        placeholder="Insira o preço de venda do produto"
        handleOnChange={handleChange}
        value={product.price ? product.price : ''}
      />

      <SubmitButton text="Criar" />
    </form>

  )
}

export default ProductForm