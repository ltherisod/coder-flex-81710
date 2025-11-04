import {useState, useEffect} from 'react'

const ItemCount = ({stock, onAdd}) => {
const [count, setCount]= useState(1)


const sumar = ()=>{
    if(count < stock){

        setCount(count + 1)
    }
}

const restar = ()=>{
    if(count > 0){
        setCount(count - 1)
    }
}
const ejecutarCompra = ()=>{
    onAdd(count)
}
console.log('ItemCount')

  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra} disabled={count === 0 || stock === 0}>Comprar</button>
    </>
  )
}

export default ItemCount