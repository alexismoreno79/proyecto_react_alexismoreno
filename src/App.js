import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity}`)
  }
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Materiales Moreno'/>
      <Counter stock={10} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
