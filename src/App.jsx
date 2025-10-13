import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBS from "./components/NavbarBS";

function App() {


  return (
    <>
      <NavbarBS/>
      <ItemListContainer saludo='Bienvenido a mi app'/>
    </>
  )
}

export default App
