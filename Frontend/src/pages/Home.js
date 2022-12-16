import styles from './Home.module.css'

function Home(){
	return(
		<section className={styles.home_container}>
			<h1>Bem-vindo ao Receitalista!</h1>
			<p>Comece a gerenciar os seus produtos</p>
		</section>
	);
}

export default Home