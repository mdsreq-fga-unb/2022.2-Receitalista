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
    const [productPrice, setProductPrice] = useState(0);
    const [basePrice, setBasePrice] = useState(0);
    const [profitMargin, setProfitMargin] = useState(0);
    const [timeSpent, setTimeSpent] = useState(0);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(itemList.length !== 0 && product.name ){
            try {
                await axios.post("product/add",  JSON.stringify({
                    name: product.name,
                    description: product.description,
                    itens: itemList,
                    base_price: basePrice,
                    product_price: productPrice,
                    profit_margin: profitMargin,
                    time_spent: timeSpent
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
                productPrice={productPrice}
                setProductPrice={setProductPrice}
                basePrice={basePrice}
                handleSubmit={onSubmit}
                product={product}
                setProduct={setProduct} 
            />
        </div>
    )
}

export default NewProduct