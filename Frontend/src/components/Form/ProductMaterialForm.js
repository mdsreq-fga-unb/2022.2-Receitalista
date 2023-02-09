import React, { useEffect, useState } from "react";

import axios from "../../api/axios";

import classes from "./ProductForm.module.css"

const ProductMaterialForm = ({ setItemList, setProductPrice, array = [] }) => {
    const [materialList, setMaterialList] = useState([]);

    const [selectedMaterialList, setSelectedMaterialList] = useState(array);
    const [quantity, setQuantity] = useState(0);
    const [selectedMaterialIndex, setSelectedMaterialIndex] = useState();

    const [renderAux, setRenderAux] = useState(false);

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
        <div className={classes['product-material']}>

            <div className={classes['add-product-material']}>
                <select
                    onChange={(event) => handleProductSelection(event)}
                >

                    <option selected disabled >
                        Escolha um material
                    </option>

                    {materialList ? materialList.map((material) => {
                        return <option
                            key={material.id}
                            value={material.id}>
                            {material.name}
                            {material.unity}
                        </option>
                    }) : ""}
                </select>

                <input
                    type="number"
                    min="1"
                    step="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    onClick={(event) => handleMaterialIncrement(event)}>Adicionar
                </button>

            </div>

            {selectedMaterialList ? selectedMaterialList.map((item) => {

                return (
                    <React.Fragment key={item[0].id}>
                        {item ? <div className={classes['list-product-material']}>
                            <span>{item[0].name}</span>
                            <span>(Medida)</span>
                            <span>Quantidade: {item[0].usedQuantity}</span>
                            <button onClick={(event) => handleMaterialDelete(event, item[0].id)}>Deletar</button>
                        </div> : "Material não encontrado"}
                    </React.Fragment>
                )
            }) : "Carregando..."}
        </div>
    )

}


export default ProductMaterialForm;