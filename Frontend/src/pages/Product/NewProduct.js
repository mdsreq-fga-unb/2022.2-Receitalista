import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'
import Message from '../../components/Message/Message';

import classes from "../Page.module.css"

function NewProduct() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('')
    
    const [product, setProduct] = useState({});
    
    const [itemList, setItemList] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(itemList.length !== 0 && product.name ){
            try {
                await axios.post("product/add",  JSON.stringify({
                    name: product.name,
                    description: product.description,
                    itens: itemList,
                    profit_margin: Number(product.profit_margin),
                    time_spent: Number(product.time_spent)
                }), {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }}).then(response => {
                    console.log(response);
                    navigate('/produtos', {state: {message: `Produto ${product.name} criado com sucesso`}});
                }).catch( err => {
                    console.log(err);
                    setMessage("Erro na criação de produto.");
                });
            }
            catch(err) {
                console.log(err);   
            }
        }
    }
    return (
        <div className={classes.page} >
            <h1>Inserir novo produto</h1> 
            {message && <Message type="error" msg={message} />} 
            <ProductForm 
                itemList={itemList}
                setItemList={setItemList} 
                product={product}
                setProduct={setProduct} 
                handleSubmit={onSubmit}
            />
        </div>
    )
}

export default NewProduct