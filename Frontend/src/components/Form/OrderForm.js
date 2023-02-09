import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import "./OrderForm.css"
import OrderProduct from "./OrderProduct"
import OrderClient from "./OrderClient"


export default function OrderForm({ handleSubmit, order, setOrder, itemList, setItemList, setClientList,totalPrice, setTotalPrice }) {

    function handleChange(e) {
        setOrder({ ...order, [e.target.name]: e.target.value })
    }

    return (
        <form className="form">

            <text className='text-title'>
                Insira um cliente:
            </text>

            <div className="box-add-product">
                <OrderClient
                    setItemList={setItemList}
                />
            </div>

            <text className='text-title'>
                Insira os produtos:
            </text>

            <div className="box-add-product">
                <OrderProduct
                    totalPrice={order.totalPrice}
                    setTotalPrice={setTotalPrice}
                    setItemList={setItemList} />
            </div>

            <Input
                type="date"
                text="Data do pedido"
                name="date"
                placeholder="Insira a data"
                value={order.date}
                handleOnChange={handleChange}
                required="required"
            />

            {/*             <div className="final-price">
                <text className="text-title">Preço final do pedido: R$ {totalPrice}</text>
            </div> */}

            <SubmitButton text="Salvar" onClick={handleSubmit} />
        </form>
    )

}