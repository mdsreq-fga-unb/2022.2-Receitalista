import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./OrderProduct.css"

const OrderClient = ({setItemList, array = []}) => {
    const [clientList, setClientList] = useState([]);
    const [selectedClientList, setSelectedClientList] = useState(array);
    const [selectedClientIndex, setSelectedClientIndex] = useState();
    const [renderAux, setRenderAux] = useState(false);

    const getItems = async() => {
        await axios.get("client/list", {headers: {"Authorization" : `Bearer ${localStorage.getItem("acess_token")}`}})
            .then(response => {
                setClientList(response.data.clients);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() =>{
        getItems();
    }, []);

    const handleOrderSelection = (event) => {
        const id = Number(event.target.value);
        setSelectedClientIndex(id);
    }

    const handleProductIncrement = (event) =>{
        event.preventDefault();

        let itemExists = false;

        let selectedClient = clientList.filter((item) => {
            if(item.id === selectedClientIndex) {
                return item;
            }
        });
        selectedClientList.forEach((item) => {
            if(selectedClient[0].id === item[0].id){
                alert("Produto já adicionado")
                itemExists = true;   
            }
        });

        if(!itemExists) {
					setSelectedClientList([...selectedClientList, {...selectedClient}]);
        }
    } 

    const handleProductDelete = (event, id) => {
        event.preventDefault();

        const indexToDelete = selectedClientList.filter((item, index ) => {
            if(item[0].id === id) {
                return index;
            }
        })

        let clientList = selectedClientList;
        clientList.splice(indexToDelete, 1);

        setSelectedClientList(clientList);
        setRenderAux(!renderAux);   
    }

    setItemList(selectedClientList);

    return (
        <div className="request-client">
            <div className="add-request-product">
                <select onChange={(event) => handleOrderSelection(event)}>
                    <option selected disable > Escolha um cliente</option>
                    {clientList ? clientList.map((client) => {
                        return <option key={client.id} value = {client.id}>{client.name}</option>
                    }) : ""}
                </select>
                
                <button
                    type="submit"
                    onClick={(event) => handleProductIncrement(event)}
                > Adicionar 
								</button>
            </div>

            {selectedClientList ? selectedClientList.map((item) => {
                return(
                    <React.Fragment key={item[0].id}>
                        {item ? <div className="list-request-product">
                            <span>{item[0].name}</span>
                            <button onClick={(event) => handleProductDelete(event, item[0].id)}>Deletar</button>
                        </div> : ""}
                    </React.Fragment>
                )
            }) : ""}    
        </div>
    )
}

export default OrderClient;