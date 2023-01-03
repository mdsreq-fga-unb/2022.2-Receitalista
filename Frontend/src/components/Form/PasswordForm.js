import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function PasswordForm({ handleSubmit, accountData }) {
  const [account, setAccount] = useState(accountData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(account)
  }

  function handleChange(e) {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={classes.form}>

      <Input
        type="password"
        text="Senha atual"
        name="newPassword"
        placeholder="Insira a senha atual"
        handleOnChange={handleChange}
        value={account.password ? account.password : ''} 
      />
      
      <Input
        type="password"
        text="Nova senha"
        name="newPassword"
        placeholder="Insira a nova senha"
        handleOnChange={handleChange}
        value={account.newPassword ? account.newPassword : account.password} 
      />

      <SubmitButton text="Trocar" />
    </form>

  )
}

export default PasswordForm