
import Navbar_Nav from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import ItemCount from './componentes/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Navbar_Nav/>   
      <Routes>
        <Route path='/'element={<ItemListContainer titulo={'Lista de Productos'}/>}/>
        <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
