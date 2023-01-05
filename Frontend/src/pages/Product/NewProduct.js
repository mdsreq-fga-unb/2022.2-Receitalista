import { useState } from 'react'

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const [product, setProduct] = useState({});
    // const [materials, setMaterials] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post("product/add", JSON.stringify({name: product.name, description: product.description, materials: product.materiais}))
        }
        catch {

        }
    }

    return (
        <div className={classes.page}>
            <h1>Criar produto</h1>  
            <ProductForm handleSubmit={onSubmit} product={product} setProduct={setProduct} />
        </div>
    )
}

export default NewProduct