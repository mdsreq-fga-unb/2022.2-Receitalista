import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [itemList, setItemList] = useState([]);
    const [aux, setAux] = useState(false);

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
        setAux(true);

        e.preventDefault();
        if(formatedItemList.length !== 0 && name && aux){
            try {
                await axios.post("product/add", JSON.stringify({
                    name: name,
                    description: description,
                    total_price: 40,
                    itens: formatedItemList
                })).then(response => {
                    console.log(response);
                    alert("Produto criado com sucesso!");
                    navigate("/home");
                }).catch( err => {
                    console.log(err);
                    alert("Erro na criação do produto");
                });
            }
            catch(err) {
                console.log(err);   
            }
            setAux(false);
        }
    }
    return (
        <div className={classes.page} onClick={onSubmit} >
            <h1>Criar produto</h1>  
            <ProductForm  product={product} setProduct={setProduct} itemList={itemList} setItemList={setItemList} />
        </div>
    )
}

export default NewProduct