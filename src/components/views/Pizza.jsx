import '../assets/Pizza.css';
import { useContext } from 'react';
import myContext from '../context/myContext';
import { useNavigate } from "react-router-dom";

const Pizza = () => {
    const navigate = useNavigate();
    const {pizza, pizzaInfo, pizzaCarrito, setPizzaCarrito} = useContext(myContext);

    const regresar = () => {
        navigate(`/`)
    }

    const AgregaAlCarrito = (id) => { 
        const index = pizza.findIndex(pizza => pizza.id === id);
        let nuevalista = pizzaCarrito
        nuevalista.push(pizza[index])
        setPizzaCarrito(nuevalista)
    }
    

    return (
        <div className="pizza">
            <div className='pizzaCard'>
                <img src={pizzaInfo.img} alt={pizzaInfo.name}/>
                <div className='infoPizzaCard'>
                    <h1>{pizzaInfo.name}</h1>
                    <p>{pizzaInfo.desc}</p>
                    <span><strong>Ingredientes:</strong></span>
                    {pizzaInfo.ingredients.map((ingrediente,index) => (
                        <p key={index} className='ingredientes'> 🍕 {ingrediente}</p>
                    ))}
                    <div className='botonesPizza'>
                        <h2>Precio: ${pizzaInfo.price}</h2>
                            <button onClick={ () => regresar()}>Regresar 🔙</button>
                            <button onClick ={() => AgregaAlCarrito(pizzaInfo.id)}>Añadir al 🛒</button>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza	