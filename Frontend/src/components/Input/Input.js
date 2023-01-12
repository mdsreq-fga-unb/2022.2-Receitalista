import classes from './Input.module.css'

function Input({disabled=false, type, min, max, step, minlength, name, text, placeholder, handleOnChange, value, required }) {
	return (
		<div className={classes.form_control}>
			<label htmlFor={name}>{text}:</label>
			<input
				disabled={disabled}
				type={type}
				min={min}
				max={max}
				step={step}
				minlength={minlength}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
				required={required}
			/>
		</div>
	)
}

export default Input 