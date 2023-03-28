import { useContext } from 'react'
import '../assets/Home.css'
import myContext from '../context/myContext'
import { useNavigate } from "react-router-dom";


const Home = () => { 
    const {pizza, setPizzaInfo, pizzaCarrito, setPizzaCarrito} = useContext(myContext);
    const navigate = useNavigate();

    const informacionPizza = (id) => {
        const index = pizza.findIndex(pizza => pizza.id === id)
        setPizzaInfo(pizza[index])
        navigate(`/Pizza/${id}`)
    }
    
    const AgregaAlCarrito = (id) => { 
        const index = pizza.findIndex(pizza => pizza.id === id);
        let nuevalista = pizzaCarrito
        nuevalista.push(pizza[index])
        setPizzaCarrito(nuevalista)
    }

    return (
        <div className="contenedorHome" >
            <div className="titulo" style={{backgroundImage: `url(/img/pizzafondonegro.jpg)`}}>
                <p className="texto">¡Pizzería Mamma Mía!</p>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
            <div className="pizzaCards grid-columns-3 p-3">
                {pizza.map ((item,index) => (
                    <div key={index} className="card">
                        <img src={item.img} alt = {item.name} />
                        <div className="cardInfo">
                            <h1>{item.name}</h1>
                            <div>
                                <span><strong>Ingredientes:</strong></span>
                                {item.ingredients.map((ingrediente,index) => (
                                    <p key={index}>🍕 {ingrediente}</p>
                                ))}
                            </div>
                            <h2>Precio: ${item.price}</h2>
                            <div className='botones'>
                                <button onClick={() => informacionPizza(item.id)}> Ver más 📑 </button>
                                <button onClick ={() => AgregaAlCarrito(item.id)}>Añadir al 🛒</button>
                            </div>
                        </div> 
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home