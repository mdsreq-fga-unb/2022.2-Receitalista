import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./OrderProduct.css"

const OrderProduct = ({setItemList, setTotalPrice, array = []}) => {
    const [productList, setProductList] = useState([]);
    const [selectedProductList, setSelectedProductList] = useState(array);
    const [quantity, setQuantity] = useState(0);
    const [selectedProductIndex, setSelectedProductIndex] = useState();
    const [renderAux, setRenderAux] = useState(false);
    
    useEffect(() => {
        let newPrice = 0;
        
        if(selectedProductList.legth !== 0){
            selectedProductList.forEach(element => {
                if(element[0].price){
                    newPrice = newPrice + (Number(element[0].price) * element[0].usedQuantity);
                    setTotalPrice(newPrice);
                }
            });
        }
        else {
            setTotalPrice(0);
        }
    }, [selectedProductList, renderAux]);

    const getItems = async() => {
        await axios.get("product/list", {headers: {"Authorization" : `Bearer ${localStorage.getItem("acess_token")}`}})
            .then(response => {
                
                setProductList(response.data.products);
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
        setSelectedProductIndex(id);
    }

    const handleProductIncrement = (event) =>{
        event.preventDefault();

        let itemExists = false;

        let selectedProduct = productList.filter((item) => {
            if(item.id === selectedProductIndex) {
                return item;
            }
        });
        selectedProductList.forEach((item) => {
            if(selectedProduct[0].id === item[0].id){
                alert("Produto já adicionado")
                itemExists = true;   
            }
        });

        selectedProduct[0].usedQuantity = quantity;

        if(!itemExists) {
            setSelectedProductList([...selectedProductList, {...selectedProduct}]);
        }
    } 

    const handleProductDelete = (event, id) => {
        event.preventDefault();

        const indexToDelete = selectedProductList.filter((item, index ) => {
            if(item[0].id === id) {
                return index;
            }
        })

        let productList = selectedProductList;
        productList.splice(indexToDelete, 1);

        setSelectedProductList(productList);
        setRenderAux(!renderAux);   
    }

    setItemList(selectedProductList);

    return (
        <div className="request-product">
            <div className="add-request-product">
                <select onChange={(event) => handleOrderSelection(event)}>
                    <option selected disable > Escolha um produto</option>
                    {productList ? productList.map((product) => {
                        return <option key={product.id} value = {product.id}>{product.name}</option>
                    }) : ""}
                </select>
                
                <input
                    type="number"
                    min="0"
                    step="1"
                    value= {quantity}
                    onChange={(e) => setQuantity(e.target.value)}    
                    required
                />
                <button
                    type="submit"
                    onClick={(event) => handleProductIncrement(event)}
                > Adicionar </button>
            </div>
            {selectedProductList ? selectedProductList.map((item) => {
                return(
                    <React.Fragment key={item[0].id}>
                        {item ? <div className="list-request-product">
                            <span>{item[0].name}</span>
                            <span>Quantidade: {item[0].usedQuantity}</span>
                            <button onClick={(event) => handleProductDelete(event, item[0].id)}>Deletar</button>
                        </div> : ""}
                    </React.Fragment>
                )
            }) : ""}
            
        </div>

    )
}

export default OrderProduct;