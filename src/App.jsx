// import BotonMultiuso from "./examples/BotonMultiuso"
import Navbar from "./components/Navbar"
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBS from "./components/NavbarBS";

function App() {


  return (
    <>
    {/* PRIMER PRE ENTREGA */}
      {/* <Navbar/> */}
      <NavbarBS/>
      <ItemListContainer saludo='Bienvenido a mi app'/>
    {/* CODIGO DE EJEMPLO */}
      {/* <BotonMultiuso label='Boton UNO' apagado={false} style='boton-uno'>
        Boton Uno
       {/* <p>Hola soy una children</p>
        <p>Hola soy una children</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4y2IvI-kKYAL9aMAKBSQk8Yw2dQmGuZ_QA&s" alt='palito'/> */}
      {/* </BotonMultiuso> */}
      {/* idealmente asi, si no tiene hijo */}
      {/* <BotonMultiuso label='BOTON DOS' apagado={true} style='boton-dos'>boton dos</BotonMultiuso> */} 
    </>
  )
}

export default App
