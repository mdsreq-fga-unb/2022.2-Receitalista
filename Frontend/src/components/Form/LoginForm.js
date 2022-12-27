import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function LoginForm() {

  return (
    <form onSubmit className={classes.form}>

      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira o seu email"
        handleOnChange={handleChange}
        value={account.email ? account.email : ''}
      />

      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Insira sua senha"
        handleOnChange={handleChange}
        value={account.password ? account.password : ''}
      />

      <SubmitButton text="Enviar" />
    </form>
  )
}

export default LoginForm