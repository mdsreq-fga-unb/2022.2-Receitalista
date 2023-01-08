import { useState } from 'react'

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const [product, setProduct] = useState({});
    const [itemList, setItemList] = useState([]);

    let formatedItemList = [];
    let name = product.name;
    let description = product.description;

    itemList.forEach(element => {
        formatedItemList.push({
            name: element.name,
            quantity: element.quantity,
            unit: element.unit,
            price: element.price,
            usedQuantity: element.usedQuantity
        });
    });    


    


    const onSubmit = async (e) => {

        e.preventDefault();
        try {
            await axios.post("product/add", JSON.stringify({
                name: name,
                description: description,
                total_price: 40,
                itens: formatedItemList
            })).then(response => console.log(response));
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <div className={classes.page} onClick={onSubmit} >
            <h1>Criar produto</h1>  
            <ProductForm  product={product} setProduct={setProduct} setItemList={setItemList} />
        </div>
    )
}

export default NewProduct