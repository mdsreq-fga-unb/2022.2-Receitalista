import classes from './SubmitButton.module.css'

function SubmitButton({text, onClick}) {
  return (
    <div>
        <button onClick={onClick} className={classes.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton