import React, { useState, useEffect } from "react"
export const ProductContext = React.createContext()

export const ProductProvider = (props,) => {
    const [image, setImage] = useState(null)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState([])
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const handleImageChange = e => {
        const file = e.target.files[0]
        setImage(file)
    }




    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(e => e.json())
            .then(e => setProducts(e))
        console.log(products)
    }, []);

    useEffect(() => {
        if (cart.length) {
            setTotal(cart.reduce((a, b) => a + b.count * b.price, 0))
        } else {
            setTotal(0)
        }
    }, [cart])






    const moveToCart = prod => {
        let found = cart.find(x => x.id === prod.id)
        if (found) {
            found.count++
            setCart([...cart])
        } else {
            setCart([...cart, { ...prod, count: 1 }])
        }
        setIsAddedToCart(true);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 2000);
    }


    const Down = prod => {
        setCart([...cart], { ...prod })
        if (prod.count > 0) {
            prod.count -= 1
            if (prod.count < 0) {
                prod.count = 0
            }
        }
    }


    const Up = prod => {
        setCart([...cart], { ...prod.count++ })
    }




    const Delate = prod => {
        setCart(cart.filter(a => a !== prod))
    }



    return <ProductContext.Provider value={{ products, setProducts, cart, setCart, moveToCart, Up, Down, Delate, total, setTotal, isAddedToCart, setIsAddedToCart, handleImageChange, image, setImage }}>
        {props.children}
    </ProductContext.Provider>
}