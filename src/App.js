import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
// import Animation from './components/Animation/Animation';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {
  // const handleOnAdd = (quantity) => {
  //   console.log(`La cantidad agregada es: ${quantity}`)
  // }
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
              <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
      {/* <Counter stock={10} onAdd={handleOnAdd} /> */}
      {/* <MercadoLibre /> */}
      {/* <Animation /> */}
    </div>
  );
}

export default App;