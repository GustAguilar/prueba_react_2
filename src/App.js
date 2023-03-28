import Home from './components/views/Home';
import Navbar from './components/views/Navbar';
import Carrito from './components/views/Carrito.jsx';
import Pizza from './components/views/Pizza';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import myContext from './components/context/myContext';



function App() {
  const [pizza, setPizza] = useState([]);
  const [pizzaInfo, setPizzaInfo] = useState([]);
  const [pizzaCarrito, setPizzaCarrito] = useState([]);
  const resultadoPizza = {pizza, setPizza, pizzaInfo, setPizzaInfo, pizzaCarrito, setPizzaCarrito};
  const endpoint = "/pizzas.json";

  const buscaPizza = async () => {
    let peticion = await fetch(endpoint)
    let resultado = await peticion.json()
    setPizza(resultado) 
  }
  
  useEffect(() => {
    buscaPizza()
  },[])

  return (
    <div className="App">
      <BrowserRouter> 
        <header>
          <Navbar/>
        </header>
        <section>
        <myContext.Provider value={resultadoPizza}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Carrito" element={<Carrito />}/>
                <Route path='/Pizza/:id' element={<Pizza/>}/>
            </Routes>
        </myContext.Provider>
        </section>
      </BrowserRouter>  
    </div>
      
  );
}

export default App;
