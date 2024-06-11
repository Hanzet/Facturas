import React from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">Sitio web de facturas</h1>
            <p className="lead">Esta es la ventana de Bienvenida.</p>
            <hr className="my-4" />
            <button className="btn btn-primary">
                <NavLink to="/products" className="nav-link">Ir a Productos</NavLink>
            </button>
        </div>
        </div>
    );
};

export default Home;