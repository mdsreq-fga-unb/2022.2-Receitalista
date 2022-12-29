import ItemCard from '../../components/Card/ItemCard'
import Container from '../../components/Container/Container'
import classes1 from '../Page.module.css'
import classes from './Itens.module.css'

function Itens() {

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
				<h1>Materiais adquiridos</h1>
				<p>Veja seus materiais</p>
			</div>
			<div className={classes.itens}>
				<Container customClass="start">
					{itens.length > 0 &&
						itens.map((item) =>
							<ItemCard
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

export default Itens