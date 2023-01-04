import { useEffect, useState } from 'react'

import axios from '../../api/axios';

import Input from "../Input/Input"
import Select from "../Select/Select"
import SubmitButton from "../Button/SubmitButton"

import "./ProductForm.css"

export default function ProductForm({ handleSubmit, product, setProduct }) {

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={handleSubmit} className="form">

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
        <Add product={product} setProduct={setProduct} />
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

export function Add({ product, setProduct }) {
  const [materials, setMaterial] = useState([]);

  const addMaterial = material => {
    setMaterial([...materials, material]);
    setProduct({ ...product, materials: materials });
  };

  const deleteMaterial = index => {
    let newMaterials = [...materials];
    newMaterials.splice(index, 1);

    setMaterial(newMaterials);
    setProduct({ ...product, materials: materials });
  };

  return (

    <div className='Add'>

      <Form1
        onSave={addMaterial}
      />

      <List materials={materials} deleteMaterial={deleteMaterial} />

    </div>
  );
}

export function Form1(props) {
  const [materials, setMaterials] = useState([{}]);

  useEffect(()=>{
    try {
			axios.get('/item/list', {
					headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem('acess_token')}`},				
			})
        .then(response => {
          setMaterials(response.data.item);
        })
        .catch(err => {
          console.log(err);
        });
		} catch (err) {
			console.log(err);
		}
  },[]);

  const { onSave } = props;

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>

      <Select
        name="material"
        options={materials}
        handleOnChange={e => setSelectedItem(e.target.options[e.target.selectedIndex].value)}
        value={selectedItem}
      />

      <button
        onClick={() => {
          setSelectedItem("");
          onSave(selectedItem);
        }}>Adicionar</button>
    </div>
  );
}

export function List(props) {
  const { materials } = props;

  return (
    <div>
      {materials.map((material, index) => {
        return (
          <div className='block-list'>
            <div className='list' key={index}>
              <span className='text-materials'>
                {material}
              </span>

              <div className='actions'>

                <text className='text-amount'>
                  Quantidade:
                </text>

                <input className='input-amount' type="number" />

                <button className='button-del' onClick={() =>
                  props.deleteMaterial(index)
                }>
                  Excluir
                </button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}