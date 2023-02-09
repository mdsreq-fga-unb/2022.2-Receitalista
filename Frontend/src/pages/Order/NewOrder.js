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
    const [client, setClient] = useState({});

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("order/add", JSON.stringify({
                client: client[0][0].name,
                products: orderList,
                date: order.date
            }), { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } }).then(response => {
                console.log(response);
                navigate("/pedidos", { state: { message: `Pedido criado com sucesso` } });
            }).catch(err => {
                console.log(err);
                alert("Erro na criação do pedido");
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={classes.page}>
            <h1>Inserir novo pedido</h1>
            <OrderForm setClient={setClient} handleSubmit={onSubmit} order={order} setOrder={setOrder} itemList={orderList} setItemList={setOrderList} />
        </div>
    )
}

export default NewOrder