import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [itemList, setItemList] = useState([]);
    const [aux, setAux] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    let name = product.name;
    let description = product.description;

    

    const onSubmit = async (e) => {
        setAux(true);

        e.preventDefault();
        if(itemList.length !== 0 && name && aux){
            try {
                await axios.post("product/add",  JSON.stringify({
                    name: name,
                    description: description,
                    total_price: totalPrice,
                    itens: itemList
                }), {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }}).then(response => {
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
        else if(!name){ alert("Adicione um nome no produto");   setAux(false)}
        else if (itemList.length === 0) { alert("Adicione no mínimo um material ao seu produto");  setAux(false) }
    }
    return (
        <div className={classes.page}  >
            <h1>Criar produto</h1>  
            <ProductForm totalPrice={totalPrice} setTotalPrice={setTotalPrice} handleSubmit={onSubmit}  product={product} setProduct={setProduct} itemList={itemList} setItemList={setItemList} />
        </div>
    )
}

export default NewProduct