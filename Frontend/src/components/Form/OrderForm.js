import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import "./OrderForm.css"
import OrderProduct from "./OrderProduct"


export default function OrderForm({handleSubmit, order, setOrder, itemList, setItemList, totalPrice, setTotalPrice}){

    function handleChange(e){
        setOrder({...order, [e.target.name]: e.target.value})
    }

    return (
        <form className="form">
            <Input
                type="text"
                text="Nome do pedido"
                name="name"
                placeholder="Insira o nome do pedido"
                handleOnChange={handleChange}
                value={order.name ? order.name : ''}
            />

            <text className='text-title'>
                Insira os produtos do pedido:
            </text>

            <div className="box-add-product">
                <OrderProduct totalPrice={totalPrice} setTotalPrice={setTotalPrice} setItemList={setItemList}/>
            </div>

            <div className="box-description">

                <text className="text-title">
                    Descrição do pedido:
                </text>

                <textarea 
                    className="textarea-description"
                    name="description"
                    placeholder="Exemplo: Alguma observação que queira fazer"
                    onChange={handleChange}
                    value={order.description}
                />
            </div>

            <div className="final-price">
                <text className="text-title">Preço final do pedido: R$ {totalPrice}</text>
            </div>
            
            <SubmitButton text="Criar" onClick={handleSubmit}/>
        </form>
    )

}