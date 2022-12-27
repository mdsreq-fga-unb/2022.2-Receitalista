import classes from './Button.module.css'

function SubmitButton({text}) {
  return (
    <div>
        <button className={classes.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton