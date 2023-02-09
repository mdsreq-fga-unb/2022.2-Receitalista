import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import classes from "./UpdateOrder.css"

import OrderProduct from "./OrderProduct"

export default function UpdateOrder({handleSubmit, order, setOrder, totalPrice, setTotalPrice, itemList, setItemList}) {

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  return (
    <form  className={classes.form}>

      <Input
        type="text"
        text="Nome do pedido"
        name="name"
        placeholder="Insira o nome do pedido"
        handleOnChange={handleChange}
        value={order.name ? order.name : ''}
        required="required"
      />

      <text className='text-title'>
        Insira os produtos do pedido:
      </text>

      <div className='box-add-product'>
        <OrderProduct array={order.itens} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setItemList={setItemList} />
      </div>

      <div className='box-description'>

        <text className='text-title'>
          Descrição do pedido:
        </text>

        <textarea
          className='textarea-description'
          name="description"
          placeholder='Ex.: Qual quer observação que queria colocar.'
          onChange={handleChange}
          value={order.description}
        />

      </div>

      <div className='final-price'>
        <text className='text-title'>Preço final do pedido: R$ {totalPrice}</text>
      </div>

      <SubmitButton text="Salvar" onClick={handleSubmit} />
    </form>
  )
}