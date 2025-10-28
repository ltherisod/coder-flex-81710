import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"
import NavbarBS from "./components/NavbarBS";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
// import FetchCountry from './examples/FetchCountry'

function App() {

  return (
    <BrowserRouter>
      <NavbarBS/>
      <Routes>
        {/* <Route path='/' element={<Home saludo='Bienvenido a mi app'/>}/>
        <Route path='/productos' element={<ItemListContainer saludo='Bienvenido a mi app'/>}/> */}
        <Route path='/' element={<ItemListContainer saludo='Bienvenido a mi app'/>}/>
        <Route path='/category/:type' element={<ItemListContainer saludo='Bienvenido a la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
