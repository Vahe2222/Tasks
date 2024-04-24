import React, { useState, useEffect } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ProductList } from "./components/ProductList"
import { Cart } from "./components/Cart"
import { ProductProvider } from "./Context"
import { Add } from "./Add"

export const RouteConfig = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    };

    return (
        <BrowserRouter>
            <ProductProvider>
                <div style={{ textAlign: "center" }}>
                    <nav className="navigation-links">
                        <div className="desktop-links">
                            <Link to="/" className="btn btn-danger btn-sm mx-1">Home</Link>
                            <Link to="/basket" className="btn btn-danger btn-sm mx-1">Cart</Link>
                            <Link to="/Add" className="btn btn-danger btn-sm mx-1">Add</Link>
                        </div>
                        <div className="burger-icon" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? "✖️" : "☰"}
                        </div>
                    </nav>
                    {isMobileMenuOpen && (
                        <div className="mobile-menu">
                            <Link to="/" className="btn btn-danger btn-sm mx-1">Home</Link>
                            <Link to="/basket" className="btn btn-danger btn-sm mx-1">Cart</Link>
                            <Link to="/Add" className="btn btn-danger btn-sm mx-1">Add</Link>
                        </div>
                    )}
                </div>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/basket" element={<Cart />} />
                    <Route path="/Add" element={<Add />} />
                </Routes>
            </ProductProvider>
        </BrowserRouter>
    )
}
