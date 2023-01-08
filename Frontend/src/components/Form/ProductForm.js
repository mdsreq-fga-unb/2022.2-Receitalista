import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import "./ProductForm.css"
import ProductMaterial from "./ProductMaterial"

export default function ProductForm({ handleSubmit, product, setProduct, setItemList }) {


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
        <ProductMaterial setItemList={setItemList} />
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

        <text className='text-title'>
          Inserir como material:
        </text>

        <input
          type="checkbox"
          name="active"
          handleOnChange={handleChange}
          value={product.active ? product.active : ''}
        />

        <text className='text-title'>
          Margem de lucro:
        </text>

        <input
          className="input-profit"
          type="number"
          name="profit"
          handleOnChange={handleChange}
        />

      </div>

      <div className='final-price'>
        <text className='text-title'>Preço final do produto: R$ 12.00</text>
      </div>

      <SubmitButton text="Criar" />
    </form>
  )
}