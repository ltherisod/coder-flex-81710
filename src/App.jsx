import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBS from "./components/NavbarBS";
import ItemCount from './components/ItemCount';
import FetchCountry from './examples/FetchCountry';
import ApiComponent from './examples/ApiComponent';
import withLogging from './hoc/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  //utilizacion del HOC
  const ComponenteConHoc = withLogging(ApiComponent )
  const ContadorConHoc = withLogging(ItemCount)
console.log('App')
  return (
    <>
      <NavbarBS/>
      <ItemListContainer saludo='Bienvenido a mi app'/>
      <ItemDetailContainer/>
      {/* <FetchCountry/> */}
      {/* <ApiComponent/> */}
      {/* <ComponenteConHoc/> */}
      {/* <ItemCount stock={7}/> */}
      {/* <ContadorConHoc/> */}
    </>
  )
}

export default App
