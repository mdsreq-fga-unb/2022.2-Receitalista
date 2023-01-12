import { useEffect, useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

function PasswordForm() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/user/", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(account);

  const submit = async (e) => {
    e.preventDefault();

    await axios.put("/user/password", { password: account.newPassword }, { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
      .then(response => {
        console.log(response);
        navigate("/perfil");
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleChange(e) {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={classes.form}>

      <Input
        type="password"
        text="Nova senha"
        minlength={8}
        name="newPassword"
        placeholder="Insira a nova senha"
        handleOnChange={handleChange}
        value={account.newPassword}
        required="required"
      />

      <SubmitButton text="Trocar" />
    </form>
  )
}

export default PasswordForm