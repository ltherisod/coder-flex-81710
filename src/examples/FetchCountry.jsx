import React, { useEffect } from 'react'

const FetchCountry = () => {


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/name/chile')
        .then((res)=>res.json())
        // .then((res)=>{
        //     // console.log('respuesta sin traducir', res)
        //     // console.log('respuesta traducida', res.json())
        //     //  res.json()
        // } 
        // ) //lo traducimos para poder entenderlo
        .then((data)=> console.log(data[0].flag))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry