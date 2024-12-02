import React from 'react'
import './Info.css';

export default function Info() {
    return (
        <div className="info-card">
            <h2 className="info-title">Stock</h2>
            <p className="info-paragraph">
                Para saber que Tazas estan en stock deben ingresar a mi perfil de Instagram y ver la historia destacada
                • Stock •, si el diseño que te gusta no se encuentra en esas historias podes encargarmelo.
            </p>

            <h2 className="info-title">Pagos</h2>
            <p className="info-paragraph">
                El pago se puede realizar en EFECTIVO al momento de entregar la Taza o por TRANSFERENCIA.
            </p>

            <h2 className="info-title">Envios</h2>
            <p className="info-paragraph">
                Los envios pueden realizarse a domicilio (con cargo), retiros por mi ubicación a coordinar o en puntos
                de encuentro.
            </p>
        </div>
    );
}
