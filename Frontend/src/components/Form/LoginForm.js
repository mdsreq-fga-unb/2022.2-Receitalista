import { useState } from 'react'

import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function LoginForm({ handleSubmit, loginData }) {
  const [login, setLogin] = useState(loginData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(login)
  }

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={classes.form}>

      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Insira o seu email"
        handleOnChange={handleChange}
        value={login.email ? login.email : ''}
      />

      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Insira sua senha"
        handleOnChange={handleChange}
        value={login.password ? login.password : ''}
      />

      <SubmitButton text="Entrar" />
    </form>
  )
}

export default LoginForm