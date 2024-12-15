import React from 'react';
import './Moldes.css';

export default function Moldes() {
    const moldesData = [
        {
            id: 1,
            imagen: '/images/moldes/model1.jpg',
            titulo: 'Taza Grande',
            componentes: ['Diámetro - 8,5cm', 'Alto - 9,5cm', 'Capacidad - 400cc'],
        },
        {
            id: 2,
            imagen: '/images/moldes/model2.jpg',
            titulo: 'Taza Rústica',
            componentes: ['Diámetro - 7cm', 'Alto - 6cm', 'Capacidad - 200cc'],
        },
        {
            id: 3,
            imagen: '/images/moldes/model4.jpg',
            titulo: 'Taza Bohemia',
            componentes: ['Diámetro - 7,5cm', 'Alto - 7,5cm', 'Capacidad - 300cc'],
        },
        {
            id: 4,
            imagen: '/images/moldes/model3.jpg',
            titulo: 'Taza de Té/Café',
            componentes: ['Diámetro - 5,5cm', 'Alto - 7,5cm', 'Capacidad - 200cc'],
        },
        {
            id: 5,
            imagen: '',
            titulo: 'Bandeja Rectangular',
            componentes: ['Alto - 17cm', 'Ancho - 25cm', '(la cerámica siempre achica algunos mm)'],
        },
    ];

    return (
        <div className="moldes">
            <h1>Modelos</h1>
            {moldesData.map((molde) => (
                <div key={molde.id} className="molde">
                    <img src={molde.imagen} alt={molde.titulo} className="molde-img" />
                    <div className="molde-info">
                        <h3 className="molde-titulo">{molde.titulo}</h3>
                        <ul className="molde-lista">
                            {molde.componentes.map((componente, index) => (
                                <li key={index}>{componente}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
