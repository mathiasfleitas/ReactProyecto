
import Navbar_Nav from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

function App() {
 

  return (
    <>
      <Navbar_Nav/>   
      <ItemListContainer titulo={'Bienvenidos'}/>
    </>
  )
}

export default App
