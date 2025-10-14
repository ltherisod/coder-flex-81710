import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"

const ItemListContainer = (props)=>{
    const[data, setData]=useState([])

    useEffect(()=>{
        console.log(getProductos())
        getProductos()
        .then((res)=> setData(res))
        .catch((error)=> console.log(error))
    },[])

    console.log(data, 'estado')
    
    return(
        <div>
            <h1 className="text-success">{props.saludo}</h1>
            {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer