
import Navbar_Nav from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
 

  return (
    <>
      <Navbar_Nav/>   
      <ItemListContainer titulo={'Bienvenidos'}/>
      <ItemCount onAdd={(quantity) => console.log ('Cantidad agregado: ', quantity)}/> 

    </>
  )
}

export default App
