import React from 'react'

const ApiCard = ({dataDelPersonaje}) => {
    console.log('render', dataDelPersonaje)
  return (
   <div className="card" style={{width:'18rem'}}>
  <img src={dataDelPersonaje.image} className="card-img-top" alt={dataDelPersonaje.name}/>
  <div className="card-body">
    <h5 className="card-title">{dataDelPersonaje.name}</h5>
    <p className="card-text">{dataDelPersonaje.status}</p>
 
  </div>
</div>
  )
}

export default ApiCard