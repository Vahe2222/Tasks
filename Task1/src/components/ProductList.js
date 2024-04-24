import React, { useState, useContext } from "react";
import { ProductContext } from "../Context";

export const ProductList = () => {
    const { products, moveToCart, isAddedToCart } = useContext(ProductContext);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product =>
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-center btn-info">Product List</h1>
            <input
                type="text"
                placeholder="Search by category..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="form-control my-3"
            />

            {isAddedToCart && (
                <div className="alert">Product has been added to cart!</div>
            )}

            <div className='row'>
                {filteredProducts.map(elm => (
                    <div key={elm.id} className='col-md-4 my-4'>
                        <img src={elm.image} className="cart-image" alt="Product Image" style={{ width: 189, height: 189 }} />
                        <p className="text-danger">{elm.category}</p>
                        <p><strong className='text-info'>{elm.price} Move</strong></p>
                        <button className="btn btn-info" onClick={() => moveToCart(elm)}>Move</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


