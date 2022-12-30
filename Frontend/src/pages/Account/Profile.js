import PasswordForm from '../../components/Form/PasswordForm';
import ProfileForm from '../../components/Form/ProfileForm';
import classes from '../Page.module.css'
import buttonClasses from '../../components/Button/Button.module.css'

function Profile({name = "Joao", email = "joao@joao.com", value = "R$20,00"}) {
  return (
    <div className={classes.page}>
      <h1>Perfil</h1>
      <h2>Usuário: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Valor/hora: {value}</h2>
      <ProfileForm/>
      <h3>Trocar senha</h3>
      <PasswordForm/>
      <button className={buttonClasses.btn}>Excluir conta</button>
    </div>
  );
}

export default Profile
