import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"
import {collection, getDocs, where, query} from 'firebase/firestore'
import {db} from '../service/firebase'

const ItemListContainer = (props)=>{
    const[data, setData]=useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()

    //FIREBASE
    useEffect(()=>{
        setLoader(true)
        //conectarnos con nuestra coleccion
        const productsCollection = type 
        ? query(collection(db, "productos"), where("category", "==", type ))
        :collection(db,"productos")
        //pedir los documents
        getDocs(productsCollection)
        .then((res)=>{
            //console.log(res)
            // console.log(res.docs)
            //limpiar y obtener datos
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            // console.log(list, 'lista')
           setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[type])

    //PROMESA
    // useEffect(()=>{
    //     setLoader(true)
    //     getProductos()
    //     .then((res)=>{
    //         if(type){
    //             //existe/filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             //no filtro y dejo la respuesta como esta
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoader(false))
    //     //estar atengo al cambio de category
    // },[type])

    // console.log(data, 'estado')
    
    return(
        <>
        {
            loader 
            ? <LoaderComponent/>
            : <div>
            {/* <Input/> */}
            <h1 className="text-success">{props.saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
       
    )
}

export default ItemListContainer