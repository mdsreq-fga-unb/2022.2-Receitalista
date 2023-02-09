import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./OrderClient.css"

const OrderClient = ({ setItemList, array = [] }) => {
    const [clientList, setClientList] = useState([]);
    const [selectedClientList, setSelectedClientList] = useState(array);
    const [quantity, setQuantity] = useState(0);
    const [selectedClientIndex, setSelectedClientIndex] = useState();
    const [renderAux, setRenderAux] = useState(false);

    const getItems = async () => {
        await axios.get("client/list", { headers: { "Authorization": `Bearer ${localStorage.getItem("acess_token")}` } })
            .then(response => {

                setClientList(response.data.client);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getItems();
    }, []);

    const handleOrderSelection = (event) => {
        const id = Number(event.target.value);
        setSelectedClientIndex(id);
    }

    const handleClientIncrement = (event) => {
        event.preventDefault();

        let itemExists = false;

        let selectedClient = clientList.filter((item) => {
            if (item.id === selectedClientIndex) {
                return item;
            }
        });
        selectedClientList.forEach((item) => {
            if (selectedClient[0].id === item[0].id) {
                alert("Cliente já adicionado")
                itemExists = true;
            }
        });

        selectedClient[0].usedQuantity = quantity;

        if (!itemExists) {
            setSelectedClientList([...selectedClientList, { ...selectedClient }]);
        }
    }

    const handleProductDelete = (event, id) => {
        event.preventDefault();

        const indexToDelete = selectedClientList.filter((item, index) => {
            if (item[0].id === id) {
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
            <div className="add-request-client">
                <select onChange={(event) => handleOrderSelection(event)}>
                    <option selected disable > Escolha um cliente</option>
                    {clientList ? clientList.map((client) => {
                        return <option key={client.id} value={client.id}>{client.name}</option>
                    }) : ""}
                </select>

                <button
                    disabled={selectedClientList.length > 0 ? true : false}
                    type="submit"
                    onClick={(event) => handleClientIncrement(event)}
                > Adicionar </button>
            </div>
            {selectedClientList ? selectedClientList.map((item, index) => {
                return (
                    <React.Fragment key={item[0].id}>
                        {item && index === 0 ? <div className="list-request-client">
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