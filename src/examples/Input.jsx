import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        console.log(e, 'evento')
        console.log(e.target, 'target')
        console.log(e.target.value, 'value')
        setName(e.target.value)
    }

    
    const noVocales = (e)=>{
        console.log(e.key)
        if('aeiou'.includes(e.key.toLowerCase())){
            //no dejarte escribirlo
            e.preventDefault()
            console.log('No vocales! ⚠️')
        }
    }

  return (
    <div>
        <h1>Input comun</h1>
        <input name='nombre' type='text' placeholder='Ingrese su nombre' onChange={inputHandler}/>
        <p>{name}</p>

        <h2>Input sin vocales</h2>
         <input name='sin-vocales' type='text' placeholder='No Vocales' onKeyDown={noVocales} />
    </div>
  )
}

export default Input