import { useEffect, useState } from 'react'
import '../App.css'
import { getProducts } from '../servicesApi/service'
import { CardProducts } from '../Components/CardProducts'

export const Maquina = () => {

    const [products, setProducts] = useState(null)

    const dataExtract = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(()=> {
        dataExtract()
    },[])

    if (!products) {
        return <p>Cargando...........</p>
    }

    return (
        <>
            <div className="vending-machine">
                <div className="display" id="display">
                    Selecciona un producto
                </div>
                <div className="products-grid" id="products-grid">
                    {
                        products.map(product => (
                            <CardProducts key={product.id} product={product}/>
                        ))
                    }
                </div>
                <div className="controls">
                    <div className="money-display">
                        Dinero insertado: $<span id="money">0.00</span>
                    </div>
                    <div className="coin-buttons">
                        <button className="coin-btn">
                            25¢
                        </button>
                        <button className="coin-btn">
                            50¢
                        </button>
                        <button className="coin-btn">
                            $1
                        </button>
                        <button className="coin-btn">
                            $2
                        </button>
                    </div>
                    <div className="action-buttons">
                        <button className="action-btn return-btn">
                            Devolver Dinero
                        </button>
                    </div>
                </div>
                <div className="dispenser" id="dispenser">
                    Aquí aparecerá tu producto
                </div>
            </div>

        </>
    )
}