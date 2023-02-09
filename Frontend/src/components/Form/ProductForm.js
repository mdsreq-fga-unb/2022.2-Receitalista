import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"
import classes from "./ProductForm.module.css"
import ProductMaterialForm from "./ProductMaterialForm"

export default function ProductForm({ itemList, setItemList, productPrice, setProductPrice, product, setProduct,handleSubmit}) {

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
        <ProductMaterialForm
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          setItemList={setItemList}
        />
      </div>

      <div className={classes['box-description']}>

        <text className={classes['text-title']}>
          Descrição do produto:
        </text>

        <textarea className={classes['textarea-description']}
          name="description"
          placeholder='Exemplo: Modo de fazer, receita'
          onChange={handleChange}
          value={product.description}
        />

      </div>

      <div className={classes['box-options']}>
        
        <Input
          type="number"
          text="Hora de trabalho (h)"
          name="timeSpent"
          placeholder='Insira a hora'
          min="0"
          max="1000000"
          step=".1"
          value={product.timeSpent ? product.timeSpent : 0}
          handleOnChange={handleChange}
          required="required"
        />

        <Input
          type="number"
          text="Margem de lucro (%)"
          name="profitMargin"
          placeholder='Insira a margem '
          min="0.01"
          max="1000000"
          step=".01"
          value={product.profitMargin ? product.profitMargin : 0}
          handleOnChange={handleChange}
          required="required"
        />

      </div>

      {/*    
      <div className={classes['final-price']}>
        <text className={classes['text-title']}>Preço final do produto: R$ {productPrice}</text>
      </div> 
    */}

      <SubmitButton text="Criar" />
    </form>
  )
}