import classes from './Input.module.css'

function Input({ type, min, name, text, placeholder, handleOnChange, value }) {
	return (
		<div className={classes.form_control}>
			<label htmlFor={name}>{text}:</label>
			<input
				type={type}
				min={min}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
			/>
		</div>
	)
}

export default Input 