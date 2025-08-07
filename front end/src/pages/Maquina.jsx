import { useEffect, useState } from "react";
import "../App.css";
import { createProduct, getProducts } from "../servicesApi/service";
import { CardProducts } from "../Components/CardProducts";

export const Maquina = () => {
  const [products, setProducts] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      console.log(data);
      
      if (data.length <= 2) {
        await createProduct();

        data = await getProducts();
      } else {
      }

      setProducts(data);
    };

    loadProducts();
    
    
  }, []);

  if (!products) {
    return <h2>Cargando...........</h2>;
  }

  return (
    <>
      <div className="vending-machine my-5">
        <div className="display" id="display">
          Selecciona un producto
        </div>
        <div className="products-grid" id="products-grid">
          {products.map((product) => (
            <CardProducts key={product.id} product={product} isActive={selected == product.id} onClick={()=> setSelected(product.id)} />
          ))}
        </div>
        <div className="controls">
          <div className="action-buttons">
            <button className="action-btn return-btn">Comprar</button>
          </div>
        </div>
        <div className="dispenser" id="dispenser">
          Aquí aparecerá tu producto
        </div>
      </div>
    </>
  );
};
