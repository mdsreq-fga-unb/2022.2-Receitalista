import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "../../api/axios";

import ProductForm from '../../components/Form/ProductForm'

import classes from "../Page.module.css"

function NewProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [itemList, setItemList] = useState([]);
    const [productPrice, setTotalPrice] = useState(0);
    const [basePrice, setBasePrice] = useState(0);
    const [profitMargin, setProfitMargin] = useState(0);
    const [timeSpent, setTimeSpent] = useState(0);
    const [aux, setAux] = useState(false);

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
                    itens: itemList,
                    base_price: basePrice,
                    product_price: productPrice,
                    profit_margin: profitMargin,
                    time_spent: timeSpent
                }), {headers:{ "Authorization": `Bearer ${localStorage.getItem('acess_token')}` }}).then(response => {
                    console.log(response);
                    navigate('/produtos', {state: {message: `Produto ${name} criado com sucesso`}});
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
        <div className={classes.page}  >
            <h1>Inserir novo produto</h1>  
            <ProductForm 
                itemList={itemList}
                setItemList={setItemList} 
                totalPrice={productPrice}
                setTotalPrice={setTotalPrice}
                basePrice={basePrice}
                handleSubmit={onSubmit}
                product={product}
                setProduct={setProduct} 
            />
        </div>
    )
}

export default NewProduct