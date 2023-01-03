import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function LoginForm({ handleSubmit, loginData, setLoginData }) {

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>

      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira o seu email"
        handleOnChange={handleChange}
        value={loginData.email ? loginData.email : ''}
      />

      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Insira sua senha"
        handleOnChange={handleChange}
        value={loginData.password ? loginData.password : ''}
      />

      <SubmitButton text="Entrar" />
    </form>
  )
}

export default LoginForm