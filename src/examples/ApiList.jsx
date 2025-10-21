import React from 'react'
import ApiCard from './ApiCard'

const ApiList = ({personajes}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {personajes.map((obj)=> <div key={obj.id}> <ApiCard  dataDelPersonaje={obj}/></div>)}
    </div>
  )
}

export default ApiList