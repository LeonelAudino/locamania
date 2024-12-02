import React from 'react'
import './Diseños.css';

export default function Diseños() {
    const items = [
        { title: 'Corazon Rojo', imageUrl: '/images/diseños/corazonRojo.PNG'},
        { title: 'Corazon Negro', imageUrl: '/images/diseños/corazonNegro.PNG' },
        { title: 'Flor Azul', imageUrl: '/images/diseños/florAzul.PNG' },
        { title: 'Flor Roja', imageUrl: '/images/diseños/florRoja.PNG' },
        { title: 'Esgrafiada', imageUrl: '/images/diseños/esgrafiada.PNG' },
        { title: 'Salpicada', imageUrl: '/images/diseños/salpicada.PNG' },
        { title: 'Buenos Aires (Perso)', imageUrl: '/images/diseños/ba.PNG' },
        { title: 'Kron (Perso)', imageUrl: '/images/diseños/personalizada.PNG' },
    ];

    return (
        <div className="designs-container">
            {items.map((item, index) => (
                <div key={index} className="design-item">
                    <img src={item.imageUrl} alt={item.title} className="design-image" />
                    <h3 className="design-title">{item.title}</h3>
                </div>
            ))}
        </div>
    );
}
