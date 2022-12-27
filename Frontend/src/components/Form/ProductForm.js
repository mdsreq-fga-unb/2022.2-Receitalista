import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function ProductForm() {

  return (
    <form onSubmit className={classes.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange=""
        value="" 
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange=""
        value=""
      />
      <SubmitButton text="Enviar" />
    </form>
  )
}

export default ProductForm