import React from 'react';
import { useEffect, useState } from 'react';


const PageNatural: React.FC = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('API/API.json')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Cátalogo Natural</h1>
            {productos.map((producto, index) => (
                <div className="card mb-3" style={{ maxWidth: '540px' }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <span style={{ fontSize: '4rem' }}>{producto.emoji}</span>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text"><small className="text-body-secondary">{producto.precio}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PageNatural;
