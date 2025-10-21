import React, { useEffect, useState } from 'react'
import ApiList from './ApiList'

const ApiComponent = () => {
    console.log('Soy ApiComponent y me renderizo')
    const [personajes, setPersonajes]=useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')//pido datos
        .then((res)=> res.json()) //lo traduzco
        .then((respuesta)=> setPersonajes(respuesta.results)) //guardando la respues para poder utilizarlo
        .catch((error)=> console.log(error))
    },[])

console.log(personajes)

  return (
    <div>
        {/* {personajes.map((pj)=> <p key={pj.id}>{pj.name}</p>)} */}
        <ApiList personajes={personajes}/>
    </div>
  )
}

export default ApiComponent