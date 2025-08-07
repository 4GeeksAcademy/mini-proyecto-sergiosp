import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import { Maquina } from "./pages/Maquina"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/maquina-exp" element={ <Maquina/> } />
      </Routes>
    </>
  )
}

export default App
