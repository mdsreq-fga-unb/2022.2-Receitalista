import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import classes from "./ProductForm.module.css"
import ProductMaterial from "./ProductMaterial"

export default function ProductForm({ handleSubmit, product, setProduct, itemList, setItemList, totalPrice, setTotalPrice, basePrice }) {

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  return (

    <form onSubmit={handleSubmit} className={classes['form']}>

      <Input
        type="text"
        text="Nome do produto"
        name="name"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={product.name ? product.name : ''}
        required="required"
      />

      <text className={classes['text-title']}>
        Insira os materiais do produto:
      </text>

      <div className={classes['box-add-material']}>
        <ProductMaterial
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          setItemList={setItemList}
        />
      </div>

      <div className={classes['box-description']}>

        <text className={classes['text-title']}>
          Descrição do produto:
        </text>

        <textarea className={classes['textarea-description']}
          name="description"
          placeholder='Exemplo: Modo de fazer'
          onChange={handleChange}
          value={product.description}
        />

      </div>

      <div className={classes['box-options']}>

        <text className={classes['text-title']}>
          Inserir como material:
        </text>

        <input
          type="checkbox"
          name="active"
          handleOnChange={handleChange}
          value={product.active ? product.active : ''}
        />

        <text className={classes['text-title']}>
          Margem de lucro:
        </text>

        <input className={classes['input-profit']}
          type="number"
          name="profit"
          min="0.01"
          max="1000000"
          step=".01"
          handleOnChange={handleChange}
          required="required"
        />

      </div>

      <div className={classes['final-price']}>
        <text className={classes['text-title']}>Preço final do produto: R$ {totalPrice}</text>
      </div>

      <SubmitButton text="Criar" />
    </form>
  )
}