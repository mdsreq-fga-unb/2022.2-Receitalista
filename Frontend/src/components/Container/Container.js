import classes from './Container.module.css'

function Container(props) {
  return (
    <div className={`${classes.container} ${classes[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container