import { useState } from 'react'

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const [product, setProduct] = useState({});
    // const [materials, setMaterials] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    }

    return (
        <div className={classes.page}>
            <h1>Criar produto</h1>  
            <ProductForm handleSubmit={onSubmit} product={product} setProduct={setProduct} />
        </div>
    )
}

export default NewProduct