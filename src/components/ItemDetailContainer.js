import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState }  from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading]= useState(true);
    const {idProducto} = useParams()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/${idProducto}')
    .then((response)=>{
return response.json()
    })
    .then((respuesta)=>{
        setItem(respuesta)
    })
    .catch(()=>{
toast.error("Error al cargar el producto")
    })
    .finally(()=>{
setLoading(false)
    })
    })

  return (
   <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;