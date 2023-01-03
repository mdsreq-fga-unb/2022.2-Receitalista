
import { Link } from "react-router-dom"
import * as AiIcons from 'react-icons/ai';
import MaterialCard from '../../components/Card/MaterialCard'
import Container from '../../components/Container/Container'
import classes1 from '../Page.module.css'
import classes from './Materials.module.css'
import classes2 from '../../components/Button/LinkButton.module.css'

function Materials() {

	const itens = [
		{
			id: '1',
			name: 'madeira',
		},
		{
			id: '2',
			name: 'pano',
		},
		{
			id: '3',
			name: 'madeira',
		},
		{
			id: '4',
			name: 'pano',
		},
		{
			id: '5',
			name: 'madeira',
		},
		{
			id: '6',
			name: 'pano',
		},
	]

	return (
		<>
			<div className={classes1.page}>
			<div className={classes.title}>
				<h1>Materiais adicionados</h1>
				<div className={classes2.btn}>
					<Link to="/criarmaterial" >
						<AiIcons.AiFillPlusCircle />Criar novo material
					</Link>
				</div>
				</div>
			</div>
			<div className={classes.itens}>
				<Container customClass="start">
					{itens.length > 0 &&
						itens.map((item) =>
							<MaterialCard
								id={item.id}
								name={item.name}
							/>
						)
					}
				</Container>
			</div >
		</>
	)
}

export default Materials