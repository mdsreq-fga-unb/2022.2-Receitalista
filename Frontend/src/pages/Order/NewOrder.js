import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../../api/axios";
import classes from "../Page.module.css"
import OrderForm from '../../components/Form/OrderForm';

function NewOrder() {
    const navigate = useNavigate();
    const [order, setOrder] = useState({});
    const [orderList, setOrderList] = useState({});  
    const [aux, setAux] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    let name = order.name;
    let description = order.description

    const onSubmit = async (e) => {
        setAux(true);

        e.preventDefault();
        if(orderList.length !== 0 && name && aux){
            try{
                await axios.post("order/add", JSON.stringify({
                    name: name,
                    description: description,
                    total_price: totalPrice,
                    products: orderList
                }),{headers: {"Authoriization": `Bearer ${localStorage.getItem("acess_token")}`}}).then(response => {
                    console.log(response);
                    navigate("/pedidos", {state: {message: `Pedido ${name} criado com sucesso`}});   
                }).catch( err=> {
                    console.log(err);
                    alert("Erro na criação do pedido");
                });
            }
            catch(err){
                console.log(err);
            }
            setAux(false);
            
        }

        else if (!name){alert("Adicione um nome para o pedido"); setAux(false)}
        else if (orderList.length === 0){alert("Adicione no mínimo 1 produto ao seu pedido"); setAux(false)}
    
    }
    return(
        <div className={classes.page}>
            <h1>Inserir novo pedido</h1>
            <OrderForm totalPrice={totalPrice} setTotalPrice={setTotalPrice} handleSubmit={onSubmit} order = {order} setOrder={setOrder} itemList = {orderList} setItemList={setOrderList}/>
        </div>
    )
}

export default NewOrder