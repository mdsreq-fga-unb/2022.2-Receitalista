import PasswordForm from '../../components/Form/PasswordForm';
import ProfileForm from '../../components/Form/ProfileForm';
import classes from '../Page.module.css'
import classes2 from '../../components/Button/CardButton.module.css'
import { Link } from 'react-router-dom';
import { Component, useEffect, useState } from 'react';

function Profile({ name = "Joao", email = "joao@joao.com", value = "R$20,00" }) {
  const [showProfileForm, setShowProfileForm] = useState(false)

  function toggleProfileForm() {
    setShowProfileForm(!showProfileForm)
  }

  return (
    <>
      <div className={classes.page}>
        <h1>Seu perfil</h1>
        {!showProfileForm ? (
          <div>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>Mão de obra: {value}</h4>
          </div>
        ) : (
          <ProfileForm />
        )}
        <div className={classes2.btn_card}>
          <button onClick={toggleProfileForm}>
            {!showProfileForm ? 'Editar perfil' : 'Fechar'}
          </button>
          <button onClick="">Excluir conta</button>
          <Link to="/novasenha">Nova senha</Link>
        </div>
      </div>
    </>

  )
}

export default Profile
