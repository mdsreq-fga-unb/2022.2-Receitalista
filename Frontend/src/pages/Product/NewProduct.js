
import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    return (
        <div className={classes.page}>
            <h1>Criar produto</h1>
            <p>Crie o seu produto</p>
            <ProductForm />
        </div>
    )
}

export default NewProduct