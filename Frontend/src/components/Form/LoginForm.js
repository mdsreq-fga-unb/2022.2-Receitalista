import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function LoginForm() {

  return (
    <form onSubmit className={classes.form}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Insira o seu nome"
        handleOnChange=""
        value="" 
      />
      <Input
        type="email"
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

export default LoginForm