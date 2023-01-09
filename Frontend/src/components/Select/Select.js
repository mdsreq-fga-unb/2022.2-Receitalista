import classes from './Select.module.css'

function Select({ name, options, handleOnChange, value }) {
	
	return (
		<div className={classes.control}>
			<select
				name={name}
				id={name}
				onChange={handleOnChange}
				value={value || ''}>
				<option>Selecione um material</option>
				{options.map((option) => (
					<option value={option.name} key={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select