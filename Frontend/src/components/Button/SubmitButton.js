import classes from './SubmitButton.module.css'

function SubmitButton({text}) {
  return (
    <div>
        <button className={classes.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton