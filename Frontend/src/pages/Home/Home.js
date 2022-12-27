import classes from './Home.module.css'


function Home(){
	return(
		<section className={classes.home}>
			<h1>Bem-vindo ao <span>Receitalista!</span></h1>
			<p>Comece a gerenciar os seus produtos</p>
		</section>
	);
}

export default Home