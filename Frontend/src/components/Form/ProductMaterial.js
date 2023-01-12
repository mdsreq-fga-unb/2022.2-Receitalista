import React, { useEffect, useState } from "react";

import axios from "../../api/axios";

import "./ProductMaterial.css";

const ProductMaterial = ({ setItemList, setTotalPrice, array = [] }) => {
    const [materialList, setMaterialList] = useState([]);
    const [selectedMaterialList, setSelectedMaterialList] = useState(array);
    const [quantity, setQuantity] = useState(0);
    const [selectedMaterialIndex, setSelectedMaterialIndex] = useState();
    const [renderAux, setRenderAux] = useState(false);

    useEffect(() => {
        let newPrice = 0;

        if (selectedMaterialList.length !== 0) {
            selectedMaterialList.forEach(element => {
                if (element[0].price) {
                    newPrice = newPrice + (Number(element[0].price) * element[0].usedQuantity);
                    setTotalPrice(newPrice);
                }
            });
        }
        else {
            setTotalPrice(0);
        }
    }, [selectedMaterialList, renderAux]);

    const getItems = async () => {
        await axios.get("item/list", { headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}` } })
            .then(response => {
                setMaterialList(response.data.item);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getItems();
    }, []);

    const handleProductSelection = (event) => {
        const id = Number(event.target.value);
        setSelectedMaterialIndex(id);
    }

    const handleMaterialIncrement = (event) => {
        event.preventDefault();

        let itemExists = false;

        let selectedMaterial = materialList.filter((item) => {
            if (item.id === selectedMaterialIndex) {
                return item;
            }
        });

        selectedMaterialList.forEach((item) => {
            if (selectedMaterial[0].id === item[0].id) {
                alert("Material já adicionado!");
                itemExists = true;
            }
        });

        selectedMaterial[0].usedQuantity = quantity;

        if (!itemExists) {
            setSelectedMaterialList([...selectedMaterialList, { ...selectedMaterial }]);
        }
    }

    const handleMaterialDelete = (event, id) => {
        event.preventDefault();

        const indexToDelete = selectedMaterialList.filter((item, index) => {
            if (item[0].id === id) {
                return index;
            }
        })

        let materialList = selectedMaterialList;
        materialList.splice(indexToDelete, 1);

        setSelectedMaterialList(materialList);
        setRenderAux(!renderAux);
    }

    setItemList(selectedMaterialList);

    return (
        <div className="product-material">
            <div className="add-product-material" >
                <select onChange={(event) => handleProductSelection(event)} >
                    <option selected disabled >Escolha um material</option>
                    {materialList ? materialList.map((material) => {
                        return <option key={material.id} value={material.id}>{material.name}</option>
                    }) : ""}
                </select>

                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button type="submit" onClick={(event) => handleMaterialIncrement(event)}>Add</button>
            </div>
            {selectedMaterialList ? selectedMaterialList.map((item) => {

                return (
                    <React.Fragment key={item[0].id}>
                        {item ? <div className="list-product-material">
                            <span>Nome do produto: {item[0].name}</span>
                            <span>Quantidade: {item[0].usedQuantity}</span>
                            <button onClick={(event) => handleMaterialDelete(event, item[0].id)}>Deletar</button>
                        </div> : ""}
                    </React.Fragment>
                )
            }) : ""}
        </div>
    )
}

export default ProductMaterial;