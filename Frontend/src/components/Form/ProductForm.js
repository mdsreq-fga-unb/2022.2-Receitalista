import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import classes from "./ProductForm.css"
import { Form } from 'react-router-dom'

export default function ProductForm({ handleSubmit, productData }) {
  const [product, setProduct] = useState(productData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(product)
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={submit} className="form">

      <Input
        type="text"
        text="Nome do produto"
        name="name"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={product.name ? product.name : ''}
      />
      <text className='text-title'>Insira todos os materiais/ingredientes do produto:</text>
      <div className='box-add-material'>
        
        <Add/>
      </div>
      <div className='box-description'>
        <text className='text-title'>Descrição do produto:</text>
        <textarea
          className='textarea-description'
          name="description"
          placeholder='Ex.: Receita do produto'
          handleOnChange={handleChange}
          
        />
      </div>
      <div className='box-options'>
        <text className='text-title'>Deseja colocar esse produto como um material:</text>
        <input
          type="checkbox"
          name="active"
          handleOnChange={handleChange}
          value={product.active ? product.active : ''}
        />
        
        <text className='text-title'>Quanto de lucro quer obter:</text>
        <input
          className="input-profit"
          type="number"
          name="profit"
          handleOnChange={handleChange}

        />
      </div>

      <div className='final-price'><text className='text-title'>Preço final do produto: R$ 12.00</text></div>

      <SubmitButton text="Criar" />
    </form>

  )
}

export function Add(){
  const [materials, setMaterial] = useState([]);

  const addMaterial = material => {
    setMaterial([...materials, material]);
  };

  const deleteMaterial = index => {
    let newMaterials = [...materials];
    newMaterials.splice(index,1);

    setMaterial(newMaterials);
  };

  return (
    <div className='Add'>
      <Form1 onSave={addMaterial}/>
      <List materials={materials} deleteMaterial={deleteMaterial}/>
    </div>
  );
}

export function Form1 (props) {
  const {onSave} = props;

  const[text, setText] = useState("");

  return (
    <div>
      <input 
        className='input' 
        placeholder="Insira o nome do material" 
        value={text || ""}
        onChange={e => setText(e.currentTarget.value)}
      />
      
      <button 
        onClick={() => {
          setText("");
          onSave(text);}}>Adicionar</button>
    </div>
  );
}

export function List(props) {
  const {materials} = props;

  return (
    <div>
      {materials.map((material, index) =>{
        return (
          <div className='block-list'>
            <div className='list' key={index}>
              <span className='text-materials'>{material}</span>
              <div className='actions'>
                <text className='text-amount'>Quantidade:</text>
                <input className='input-amount' type="number" />      
                <button className='button-del' onClick={() => props.deleteMaterial(index)}>Excluir</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}