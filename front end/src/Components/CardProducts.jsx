
export const CardProducts = ({ product, isActive, onClick }) => {
    

  return (
    <>
      <div className={`${isActive && 'active'} text-center rounded-4 p-3 product-card`} onClick={onClick}>
        <div className="product-name text-white">{product.name}</div>
        <div className="product-price text-warning fs-5">
          {product.price.toFixed(2)}€
        </div>
        <div className="product-quantity text-light">
          Stock: {product.quantity}
        </div>
      </div>
    </>
  );
};
