

export const CardProducts = ({ product }) => {
    return (
        <>
            <div className="bg-secondary">
                <div className="product-name text-white">{product.name}</div>
                <div className="product-price">{product.price.toFixed(2)}</div>
                <div className="product-quantity">Stock:{product.quantity}</div>
            </div>

        </>
    )
}