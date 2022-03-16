import products from "../database/products"
import Item from "./Item"

const ItemDetail = (item) => {
  return (
    <article>
        <img src={item.imageUrl}/>
    <div>
        <h3>{item.titulo}</h3>
        <p>${item.precio}</p>
    </div>
    <p>{item.descripcion}</p>
    </article>
  )
}

export default ItemDetail;