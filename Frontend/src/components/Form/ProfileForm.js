import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'

function ProfileForm({ handleSubmit, accountData }) {
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
        type="email"
        text="Trocar email"
        name="email"
        placeholder="Insira o novo email"
        handleOnChange={handleChange}
        value={account.newEmail ? account.newEmail : account.email}
      />

      <Input
        type="number"
        min="1"
        text="Alterar mão de obra"
        name="value"
        placeholder="Insira novo valor da mão de obra"
        handleOnChange={handleChange}
        value={account.newValue ? account.newValue : account.value}
      />

      <SubmitButton text="Enviar" />
    </form>

  )
}

export default ProfileForm