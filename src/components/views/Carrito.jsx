import '../assets/Carrito.css'
import { useContext } from 'react'
import myContext from '../context/myContext'

const Carrito = () => { 
    const {pizzaCarrito} = useContext(myContext);

    const Total = () => {
        let total = 0 
        pizzaCarrito.forEach(pizza => total = total + pizza.price)
        return total

    }

    return (
        <div className="contenedor">
            <div className="carrito">
                <h1>Detalles Del pedido:</h1>
                {pizzaCarrito.map((item, index) => (
                    <div className='pizzaCarrito'>
                    <div className='imagen' key={index}>
                        <img src={item.img} alt = {item.name} />
                        <p className='nombre'><strong>{item.name}</strong></p>
                    </div>
                    <div>
                        <p className='precio'><strong>${item.price}</strong></p>
                    </div>
                </div>
                ))}
                
                <div className='textoCarrito'>
                    <h1>Total: $ {Total()}</h1>
                    <button className="pago">Ir a pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito;