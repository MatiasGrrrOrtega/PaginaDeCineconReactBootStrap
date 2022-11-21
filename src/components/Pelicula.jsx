import React from 'react'

function Pelicula({nombre, imagen, sinopsis, actores, duracion}) {
    return (
        <div className='pelicula'>
            <div>
                <img src={imagen} alt="imagen" />
            </div>
            <div>
                <h3>Nombre: {nombre}</h3>
                <p>Sinopsis: {sinopsis}</p>
                <p>Actores: {actores}</p>
                <p>Duracion: {duracion}</p>
            </div>
        </div>
    )
}

export default Pelicula