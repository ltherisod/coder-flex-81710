import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBS from "./components/NavbarBS";
import ItemCount from './components/ItemCount';

function App() {

console.log('App')
  return (
    <>
      <NavbarBS/>
      <ItemListContainer saludo='Bienvenido a mi app'/>
      {/* <ItemCount stock={7}/> */}
    </>
  )
}

export default App
