import classes from './Home.module.css'
import classes1 from '../../components/Button/LinkButton.module.css'
import { Link } from 'react-router-dom';


function Home(){
	return(
		<section className={classes.home}>
			<h1>Bem-vindo ao<span>Receitalista!</span></h1>
			<p>Comece a gerenciar os seus produtos</p>
			<div className={classes1.btn}>
				<Link to="/criarproduto" >
					Inserir novo produto
				</Link>
				<Link to="/criarmaterial" >
					Inserir novo material
				</Link>
			</div>
		</section>
	);
}

export default Home