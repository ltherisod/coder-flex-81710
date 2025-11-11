import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    const [invalid, setInvalid]= useState(null)
    const {id}=useParams()
    // const param = useParams()

    // console.log(param)


    //FIREBASE
    useEffect(()=>{
      setCargando(true)
      //referencia de un documento
      const docRef = doc(db, "productos",id)
      //traer el documento
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    },[id])

    //PROMISE
    // useEffect(()=>{
    //   setCargando(true)
    //     //LLAMAR LA PROMISE
    //     getOneProduct(id)
    //     .then((res)=> setDetalle(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[id])
  if(invalid){
    return <div>
      <h1> El producto no existe! 😱</h1>
      <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
  }

  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    {/* <ItemDetail detalle={detalle}/> */}
    </>
  )
}

export default ItemDetailContainer