
//Declarar el componente
//NOMBRE: siempre empieza con Mayúscula (asi React sabe que es un componente)

const BotonMultiuso = ({children, style, apagado})=> {

    // const {children, style, apagado}=props
    // console.log(props)
    //logica
    const handleClick = ()=>{
        alert('Holis!')
    }

    //siempre retornan algo (JSX: lo que se ve en pantalla )
    return(
        <button className={style} onClick={handleClick} disabled={apagado}>
          {/* {props.label} */}
          {children}
        </button>
    )
}

//Exportamos por default todo lo que esta en el archivo 
//Para usarlo en otros componentes
export default BotonMultiuso