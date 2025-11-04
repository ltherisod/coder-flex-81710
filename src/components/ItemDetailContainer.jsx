import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)

    const {id}=useParams()
    // const param = useParams()

    // console.log(param)

    useEffect(()=>{
      setCargando(true)
        //LLAMAR LA PROMISE
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])


  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    {/* <ItemDetail detalle={detalle}/> */}
    </>
  )
}

export default ItemDetailContainer