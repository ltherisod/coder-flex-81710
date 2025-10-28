import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})

    const {id}=useParams()
    // const param = useParams()

    // console.log(param)

    useEffect(()=>{
        //LLAMAR LA PROMISE
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[id])
  return (
    <>
    <ItemDetail detalle={detalle}/>
    </>
  )
}

export default ItemDetailContainer