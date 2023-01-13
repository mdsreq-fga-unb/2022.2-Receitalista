//import PasswordForm from '../../components/Form/PasswordForm';
import ProfileForm from '../../components/Form/ProfileForm';
import classes from '../Page.module.css'
import classes2 from '../../components/Button/CardButton.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
//import { wait } from '@testing-library/user-event/dist/utils';

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [showProfileForm, setShowProfileForm] = useState(false)

  function toggleProfileForm() {
    setShowProfileForm(!showProfileForm)
  }

  useEffect(() => {
    axios.get("/user/", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  const handleProfileDeletion = async () => {

    axios.delete("/user/", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
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
            <h4>Nome: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Mão de obra: {user.price_per_hour}</h4>
          </div>
        ) : (
          <ProfileForm user={user} />
        )}
        <div className={classes2.btn}>
          <button onClick={toggleProfileForm}>
            {!showProfileForm ? 'Editar perfil' : 'Fechar'}
          </button>
          <button onClick={handleProfileDeletion}>
            Excluir conta
          </button>
          <Link to="/novasenha">
            Nova senha
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile