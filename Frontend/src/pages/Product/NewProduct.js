
import ProductForm from '../../components/Form/ProductForm'

import classes from './NewProduct.module.css'

function NewProject(){
    return (
        <div className={classes.newproduct}>
            <h1>Criar produto</h1>
            <p>Crie o seu produto</p>
            <ProductForm />
        </div>
    )
}

export default NewProject