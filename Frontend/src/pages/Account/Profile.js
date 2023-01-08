import PasswordForm from '../../components/Form/PasswordForm';
import ProfileForm from '../../components/Form/ProfileForm';
import classes from '../Page.module.css'
import classes2 from '../../components/Button/CardButton.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../api/axios';
import { wait } from '@testing-library/user-event/dist/utils';

function Profile({ name = "Joao", email = "joao@joao.com", value = "R$20,00" }) {
  const navigate = useNavigate();

  const [showProfileForm, setShowProfileForm] = useState(false)
//  const [showPasswordForm, setShowPasswordForm] = useState(false)

  function toggleProfileForm() {
    setShowProfileForm(!showProfileForm)
  }

// function togglePasswordForm() {
//   setShowPasswordForm(!showProfileForm)
// }

  const handleProfileDeletion = async () => {
    axios.delete("/user/", {headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}`} })
      .then(response => {
        console.log(response);
        alert("Conta excluida com sucesso!");
        localStorage.removeItem('acess_token');
        navigate("/");
        console.log("CHEGOU");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
        alert("Não foi possível excluir sua conta.");
      });
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
        <div className={classes2.btn}>
          <button onClick={toggleProfileForm}>
            {!showProfileForm ? 'Editar perfil' : 'Fechar'}
          </button>
          <button onClick={handleProfileDeletion}>Excluir conta</button>
          <Link to="/novasenha">Nova senha</Link>
        </div>
      </div>
    </>
  )
}

export default Profile