
import { ItemListContainer } from "./componentes/Itemlist/ItemListContainer"
import { NavBar } from "./componentes/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() { 

  return (
      <div>
          <NavBar /> 
          <ItemListContainer saludo={"Hola,saludos espero recomendaciones"}/>
      </div>
  )
}

export default App
