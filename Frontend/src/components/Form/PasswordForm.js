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
    axios.get("/user/", {headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}`} })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        console.log(err);
      })
  },[]);

  console.log(account);

  //por hora isso aqui vai ficar errado, precisa que o backend envia a senha sem descriptgrafada pra comparar
  const submit = async (e) => {
    e.preventDefault();
    // if(user && user.password === account.password){
      await axios.put("/user/update", {name: null, email: null, price_per_hour: null, password: account.newPassword },{headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}`} })
        .then(response => {
          console.log(response);
          navigate("/perfil");
        })
        .catch(err => {
          console.log(err);
        }); 
    // }
  }

  function handleChange(e) {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={classes.form}>

      <Input
        type="password"
        text="Senha atual"
        name="password"
        placeholder="Insira a senha atual"
        handleOnChange={handleChange}
        value={account.password} 
      />
      
      <Input
        type="password"
        text="Nova senha"
        name="newPassword"
        placeholder="Insira a nova senha"
        handleOnChange={handleChange}
        value={account.newPassword} 
      />

      <SubmitButton text="Trocar" />
    </form>

  )
}

export default PasswordForm