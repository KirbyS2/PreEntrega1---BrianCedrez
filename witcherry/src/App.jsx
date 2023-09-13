
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import { NavBar } from "./componentes/NavBar/NavBar"

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() { 

  return (
      <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1> NOT FOUND</h1>} />
            </Routes> 
        </BrowserRouter>
      </div>
  )
}

export default App
