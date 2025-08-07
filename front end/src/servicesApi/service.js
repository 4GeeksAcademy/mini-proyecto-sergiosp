
const products = [
    {
        name: "Coca Cola",
        price: 1.50,
        quantity: 15
    },
    {
        name: "Papas Fritas",
        price: 1.25,
        quantity: 10
    },
    {
        name: "Chocolate Snickers",
        price: 1.75,
        quantity: 8
    },
    {
        name: "Agua Mineral",
        price: 1.00,
        quantity: 20
    },
    {
        name: "Galletas Oreo",
        price: 2.00,
        quantity: 6
    },
    {
        name: "Chicles Trident",
        price: 0.75,
        quantity: 25
    },
    {
        name: "Café Instantáneo",
        price: 2.50,
        quantity: 4
    }
];


export const createProduct = async () => {
    try {
        await Promise.all(
            products.map(product =>
                fetch('https://cautious-enigma-pjp4pj5wrw9phrp9q-5000.app.github.dev/products/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    }
                )
            )
        )
        

    } catch (error) {
        console.error('error al crear productos', error);

    }
}

export const getProducts = async () => {
    const response = await fetch('https://cautious-enigma-pjp4pj5wrw9phrp9q-5000.app.github.dev/products/',
        {
            method : 'GET'
        }
    )
    return await response.json()
}

