import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import "./UpdateProduct.css"
import ProductMaterial from "./ProductMaterial"
import { useEffect } from "react";

function teste (lista) {
  let salvar = [];
  for(let i =0; lista[i]; i++){
    salvar = [...salvar, lista[i][0]];
  }
}

export default function UpdateProduct({handleSubmit, product, setProduct, totalPrice, setTotalPrice, itemList, setItemList}) {

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (
    <form  className="form">

      <Input
        type="text"
        text="Nome do produto"
        name="name"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={product.name ? product.name : ''}
      />

      <text className='text-title'>
        Insira os materiais do produto:
      </text>

      <div className='box-add-material'>
        <ProductMaterial array={product.itens} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setItemList={setItemList} />
      </div>

      <div className='box-description'>

        <text className='text-title'>
          Descrição do produto:
        </text>

        <textarea
          className='textarea-description'
          name="description"
          placeholder='Ex.: Receita do produto'
          onChange={handleChange}
          value={product.description}
        />

      </div>

      <div className='box-options'>

      </div>

      <div className='final-price'>
        <text className='text-title'>Preço final do produto: R$ {totalPrice}</text>
      </div>

      <SubmitButton text="Salvar" onClick={handleSubmit} />
    </form>
  )
}